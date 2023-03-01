import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";
import { AppState, AppStateStatus, StyleSheet, useColorScheme } from "react-native";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {DarkTheme, ThemeProvider, DefaultTheme} from "@react-navigation/native"
import { persistor, store } from "./src/store";
import NavigationContainer from "./src/navigation/NavigationContainer";
import useCachedResources from "./src/hooks/useCachedResources";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  if (isLoadingComplete) {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
          <SWRConfig
            value={{
              provider: () => new Map(),
              initFocus(callback) {
                let appState = AppState.currentState;

                const handleAppStateChange = (nextAppState: AppStateStatus) => {
                  if (
                    appState.match(/inactive|background/) &&
                    nextAppState === "active"
                  ) {
                    callback();
                  }
                  appState = nextAppState;
                };

                const subscription = AppState.addEventListener(
                  "change",
                  handleAppStateChange
                );

                return () => {
                  subscription.remove();
                };
              },
              initReconnect(callback) {
                let isConnected = true;

                const handleNetStateChange = (nextNetState: NetInfoState) => {
                  if (!isConnected && nextNetState.isConnected) {
                    callback();
                  }

                  isConnected = !!nextNetState.isConnected;
                };

                const unsubscribe =
                  NetInfo.addEventListener(handleNetStateChange);

                return () => {
                  unsubscribe();
                };
              },
            }}
          >
            <SafeAreaProvider>
              <GestureHandlerRootView style={styles.container}>
                <NavigationContainer />
              </GestureHandlerRootView>
            </SafeAreaProvider>
          </SWRConfig>
        </ThemeProvider>
        </PersistGate>
      </Provider>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
