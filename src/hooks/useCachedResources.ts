import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try { 
        SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          "Nun900": require("../assets/fonts/Nun900.ttf"),
          "Nun800": require("../assets/fonts/Nunito800.ttf"),
          "Nun700"   : require("../assets/fonts/Nun700.ttf"),
          "Nun600"   : require("../assets/fonts/Nun600.ttf"),
          "Nun400"   : require("../assets/fonts/Nun400.ttf"),
          "Nun300"   : require("../assets/fonts/Nun300.ttf"),
          "Nun200"   : require("../assets/fonts/Nun200.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
