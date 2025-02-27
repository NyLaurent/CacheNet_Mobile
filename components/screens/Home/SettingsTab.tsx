import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation/types'; // Import the type

// Define the type for your navigation prop
type SettingsTabNavigationProp = StackNavigationProp<RootStackParamList, 'Settings'>;

const SettingsTab = () => {
  const navigation = useNavigation<SettingsTabNavigationProp>();
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Adjust your app settings here.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Onboarding")}>
        <Text style={styles.buttonText}>View Onboarding</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={() => navigation.navigate("SignIn")}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  logoutButton: {
    backgroundColor: "#FF3B30",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default SettingsTab

