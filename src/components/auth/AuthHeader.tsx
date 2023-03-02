import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import React, { memo } from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Nun700 } from "../../widgets/StyledText";
import { View } from "../../widgets/Themed";
import BackButton from "../../widgets/BackButton";

const { height } = Dimensions.get("window");

const AuthHeader = memo(({isPerson} : {isPerson: boolean}) => {
  const insents = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const person = ["#3A1C71", "#D76D77", "#FFAF7B"];
  const company = ["#0097ff", "#0dc1ff", "#0df5ff"];
  return (
    <View>
      <BackButton/>
      <LinearGradient
        colors={isPerson ? person : company}
        style={[styles.container, { paddingTop: insents.top }]}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
      >
        <Image
          source={require("../../assets/logo/header.png")}
          style={styles.logo}
          contentFit={"contain"}
          transition={1000}
        />
      </LinearGradient>
      <View
        style={[
          styles.bottomContainer,
          { shadowColor: colorScheme === "dark" ? "#fff" : "#000" },
        ]}
      >
        <Nun700 style={styles.title}>{isPerson ? "Хувь хүн" : "Компани"}</Nun700>
      </View>
    </View>
  );
});

export default AuthHeader;

AuthHeader.displayName = "AuthHeader";

const styles = StyleSheet.create({
  container: {
    height: height / 6,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems:"center",
  },
  logo: {
    width: 140,
    height: 50,
  },
  bottomContainer: {
    marginHorizontal: 100,
    borderRadius: 100,
    zIndex: 2,
    bottom: 20,

    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
});
