/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import * as Notifications from "expo-notifications";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "./types";
import BottomTabNavigator from "./BottomTabNavigator";
import { useNotification } from "../hooks/useNotification";

import { IAuth } from "../interfaces/IAuth";
import { useSWRToken } from "../hooks/useSWRToken";
import { Auth } from "../models/Auth";
import { authMe } from "../store/authSlice";
import { AuthApi } from "../apis";
import LoginScreen from "../screens/auth/LoginScreen";


const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const dispatch = useDispatch();
  const { user } = useSelector((state: { auth: IAuth }) => state.auth);
  // const { registerForPushNotificationsAsync, handleNotificationResponse } = useNotification();
  const { isInitialLoading } = useSWRToken<Auth>(
    "/auth/me",
    async () => {
      return await AuthApi.me();
    },
    {
      onSuccess: authData => {
        dispatch(authMe(authData));
      },
    },
  );
  // useEffect(() => {
  //   registerForPushNotificationsAsync();
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldPlaySound: true,
  //       shouldShowAlert: true,
  //       shouldSetBadge : false,
  //     }),
  //   });
  //   const responseListener = Notifications.addNotificationResponseReceivedListener(handleNotificationResponse);
  //   return () => {
  //     if (responseListener) Notifications.removeNotificationSubscription(responseListener);
  //   };
  // }, []);
  // if (isInitialLoading) {
  //   return <SplashScreen/>
  // }

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Group>
          <Stack.Screen component={BottomTabNavigator} name="Root" options={{ headerShown: false }} />
          <Stack.Screen component={BottomTabNavigator} name="TestScreen" options={{ headerShown: false }} />
        </Stack.Group>
      ) : (
        <Stack.Group
          screenOptions={{
            headerTitleStyle: styles.headerTitle,
          }}>
          <Stack.Screen component={LoginScreen} name="LoginScreen" options={{ headerShown: false }} />
        
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    fontSize  : 15,
  },
});

export default RootNavigator;
