import { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AuthSuccessScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Home"); // Use navigation.navigate
    }, 3000); // Redirect to Home after 3 seconds

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.message}>Your account has been successfully created.</Text>
      <ActivityIndicator size="large" color="#007AFF" style={styles.loader} />
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
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
  loader: {
    marginTop: 20,
  },
});

export default AuthSuccessScreen;