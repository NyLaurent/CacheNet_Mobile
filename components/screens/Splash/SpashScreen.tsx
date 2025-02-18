import { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";



type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  SignUp: undefined;
  SignIn: undefined;
  ProfileCompletion: undefined;
  AuthSuccess: undefined;
  Home: undefined;
};
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, "Splash">
const SplashScreen = () => {


  
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      navigation.replace("Onboarding"); // Use navigation.replace instead of router.replace
    }, 2000);
  }, []); // Remove navigation from dependencies

  return (
    <View style={styles.container}>
      <Image
        source={require("../.././../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;