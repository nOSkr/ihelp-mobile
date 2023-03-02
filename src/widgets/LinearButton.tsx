import { GestureResponderEvent, StyleProp, StyleSheet, TouchableOpacity, ViewStyle,  } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Nun600 } from "./StyledText";

type Props = {
  text: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
  isPerson?: boolean
};

const LinearButton = ({ text, onPress,style, isPerson }: Props) => {
    const person = ["#3A1C71", "#D76D77", "#FFAF7B"];
    const company = ["#0097ff", "#0dc1ff", "#0df5ff"];
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <LinearGradient
        colors={isPerson? person : company}
        style={[styles.container]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
      >
        <Nun600>{text}</Nun600>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default LinearButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    marginHorizontal:16,
  },

});
