import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileCompletionScreen = () => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const navigation = useNavigation();

  const handleComplete = () => {
    // Implement profile completion logic here
    console.log("Profile completed with:", name, bio);
    navigation.navigate("AuthSuccess"); // Use navigation.navigate
  };

  const handleSkip = () => {
    navigation.navigate("AuthSuccess"); // Use navigation.navigate
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete Your Profile</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.bioInput]}
        placeholder="Bio (optional)"
        value={bio}
        onChangeText={setBio}
        multiline
      />
      <TouchableOpacity style={styles.button} onPress={handleComplete}>
        <Text style={styles.buttonText}>Complete Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSkip}>
        <Text style={styles.skipText}>Skip for now</Text>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  bioInput: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  skipText: {
    marginTop: 20,
    color: "#007AFF",
    fontSize: 16,
  },
});

export default ProfileCompletionScreen;