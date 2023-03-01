import { StyleSheet } from "react-native";
import React, { memo } from "react";
import {  View } from "../../widgets/Themed";
import { Nun800, Nun200,Nun300,Nun400,Nun600,Nun700,Nun900 } from "../../widgets/StyledText";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LoginScreen = memo(() => {
    const insents = useSafeAreaInsets()
  return (
    <View
      style={[styles.container, {paddingTop:insents.top}]}
    >
      <Nun900>LoginScreen</Nun900>
      <Nun800>LoginScreen</Nun800>
      <Nun700>LoginScreen</Nun700>
      <Nun600>LoginScreen</Nun600>
      <Nun400>LoginScreen</Nun400>
      <Nun300>LoginScreen</Nun300>
      <Nun200>LoginScreen</Nun200>
    </View>
  );
});

LoginScreen.displayName = "LoginScreen";

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
