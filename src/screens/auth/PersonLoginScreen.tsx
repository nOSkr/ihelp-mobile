import { StyleSheet } from "react-native";
import React, { memo, useState } from "react";
import AwareScrollView from "../../widgets/AwareScrollView";
import AuthHeader from "../../components/auth/AuthHeader";
import { AuthApi } from "../../apis";
import { useDispatch } from "react-redux";
import { authLogin } from "../../store/authSlice";
import { ScrollView } from "../../widgets/Themed";
import LoginForm from "../../components/auth/form/LoginForm";
import LinearButton from "../../widgets/LinearButton";
const PersonLoginScreen = memo(() => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const onSubmit = async () => {
    try {
      const data = await AuthApi.login(phone, password);
      dispatch(authLogin(data));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AwareScrollView>
      <ScrollView>
      <AuthHeader isPerson={true}  />
        <LoginForm phone={phone} setPhone={setPhone} password={password} setPassword={setPassword}   />
      </ScrollView>
      <LinearButton text="Нэвтрэх" style={styles.button} onPress={onSubmit} isPerson={true}     />
    </AwareScrollView>
  );
});

PersonLoginScreen.displayName = "PersonLoginScreen";

export default PersonLoginScreen;

const styles = StyleSheet.create({
  button:{
    bottom:20,
    zIndex:2
  }
});
