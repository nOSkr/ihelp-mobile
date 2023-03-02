import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import LeftArrowIcon from "../assets/svg/arrow-left.svg";
const BackButton = () => {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity style={styles.container} onPress={goBack}>
      <LeftArrowIcon color={colorScheme === "dark" ? "#fff" : "#000"} width={35} height={35}  />
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    position:"absolute",
    top:40,
    zIndex:2
  },
});
