import { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../navigation/types'; // Import the type

// Define the type for your navigation prop
type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

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