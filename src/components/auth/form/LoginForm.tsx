import { StyleSheet, TextInput } from "react-native";
import React, { Dispatch, SetStateAction } from "react";
import { View } from "../../../widgets/Themed";
import Input from "../../../widgets/Input";
import { Nun600 } from "../../../widgets/StyledText";

type Props = {
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  password: string;
  setPassword: Dispatch<SetStateAction<string>>;
};

const LoginForm = ({ phone, setPhone, password, setPassword }: Props) => {
  return (
    <View style={styles.root}>
      <Nun600 style={styles.title}>Утас:</Nun600>
      <Input props={{ value: phone, onChangeText: setPhone }} />
      <Nun600 style={styles.title}>Нууц үг:</Nun600>
      <Input isSecure props={{ value: password, onChangeText: setPassword }} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 15,
    marginTop: 20,
    marginBottom: 10,
  },
});
