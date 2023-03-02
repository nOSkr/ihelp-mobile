import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import EyeIcon from "../assets/svg/eye.svg";
import UnEyeIcon from "../assets/svg/eye-slash.svg";
type Props = {
  props?: TextInput["props"];
  isSecure?: boolean
};

const Input = ({ props,isSecure= false }: Props) => {
  const colorScheme = useColorScheme();
  const [secure,setSecure] = useState(isSecure)
  const toggleSecure = () => {
    setSecure(!secure)
  }
  return (
    <View style={styles.root}>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: Colors[colorScheme].input,
            color: Colors[colorScheme].text
          },
        ]}
        {...props}
        secureTextEntry={secure}
      />
      {isSecure && 
      <TouchableOpacity style={styles.icon} onPress={toggleSecure}>
          {secure ? 
             <UnEyeIcon color={Colors[colorScheme].text} width={24} height={24} />
             :
             <EyeIcon color={Colors[colorScheme].text} width={24} height={24} />
      }
      </TouchableOpacity>
      }
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  root: {
  },
  input: {
    borderRadius: 8,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  icon: {
    zIndex: 12,
    padding: 12,
    position: "absolute",
    right: 0,
  },
});
