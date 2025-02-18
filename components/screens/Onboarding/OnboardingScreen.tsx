import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const onboardingData = [
  {
    title: "Welcome to Our App",
    description: "Discover amazing features that will make your life easier.",
    image: require("../../../assets/images/logo.png"),
  },
  {
    title: "Easy to Use",
    description: "Our intuitive interface ensures a smooth user experience.",
    image: require("../../../assets/images/logo.png"),
  },
  {
    title: "Get Started",
    description: "Sign up now and start enjoying our app!",
    image: require("../../../assets/images/logo.png"),
  },
];

const OnboardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const navigation = useNavigation();

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate("SignUp"); // Use navigation.navigate instead of push
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={onboardingData[currentPage].image}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{onboardingData[currentPage].title}</Text>
      <Text style={styles.description}>
        {onboardingData[currentPage].description}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentPage === onboardingData.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default OnboardingScreen;