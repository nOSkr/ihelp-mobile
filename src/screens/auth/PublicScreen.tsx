import { StyleSheet, Pressable } from "react-native";
import React, { memo } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Nun600, Nun800 } from "../../widgets/StyledText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "../../widgets/Themed";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";

const PublicScreen = memo(() => {
  const person = ["#3A1C71", "#D76D77", "#FFAF7B"];
  const company = ["#0097ff", "#0dc1ff", "#0df5ff"];
  const insents = useSafeAreaInsets();
  const navigation = useNavigation()
  return (
    <View
      style={[
        styles.root,
        { paddingTop: insents.top, paddingBottom: insents.bottom },
      ]}
    >
      <Pressable style={styles.buttonContainer} >
        <LinearGradient
          colors={company}
          style={[styles.container]}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
        >
          <Image
            source={require("../../assets/logo/header.png")}
            style={styles.image}
            contentFit={"contain"}
            transition={1000}
          />
          <Nun800 style={styles.title}>Байгууллага</Nun800>
        </LinearGradient>
      </Pressable>
      <Pressable style={styles.buttonContainer} onPress={() => navigation.navigate("PersonLoginScreen")}>
        <LinearGradient
          colors={person}
          style={[styles.container]}
          start={[0.0, 0.5]}
          end={[1.0, 0.5]}
        >
          <Image
            source={require("../../assets/logo/header.png")}
            style={styles.image}
            contentFit={"contain"}
            transition={1000}
          />
          <Nun800 style={styles.title}>Хувь хүн</Nun800>
        </LinearGradient>
      </Pressable>
    </View>
  );
});

PublicScreen.displayName = "PublicScreen";

export default PublicScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "space-around",
  },
  container: {
    height: "100%",
    marginHorizontal: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 0.45,
  },
  image: {
    width: "80%",
    height: "30%",
  },
  title:{
    fontSize:30
  }
});
