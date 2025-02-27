import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../../../navigation/types'

// Define the type for your navigation prop
type ProfileTabNavigationProp = StackNavigationProp<RootStackParamList, 'ProfileTab'>;

const ProfileTab = () => {
  const navigation = useNavigation<ProfileTabNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Your profile information goes here.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Settings")}>
        <Text style={styles.buttonText}>Go to Settings</Text>
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
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
})

export default ProfileTab

