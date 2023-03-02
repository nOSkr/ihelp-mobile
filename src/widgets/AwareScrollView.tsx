import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { useHeaderHeight } from "@react-navigation/elements";
import { View } from "./Themed";

const AwareScrollView = ({ children }: { children: ReactNode }) => {
  const height = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      style={styles.container}
      {...(Platform.OS === "ios" && { behavior: "padding" })}
      keyboardVerticalOffset={height}
    >
      {children}
    </KeyboardAvoidingView>
  );
};

export default AwareScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
