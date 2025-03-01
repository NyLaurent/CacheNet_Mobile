import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../navigation/types';
import Icon from 'react-native-vector-icons/FontAwesome';

type SignUpOptionsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpOptions'>;

const SignUpOptionsScreen = () => {
  const navigation = useNavigation<SignUpOptionsScreenNavigationProp>();
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    navigation.navigate("SignUpForm");
  };

  const handleSocialSignUp = (provider: string) => {
    // Handle social sign up logic here
    console.log(`${provider} login`);
    // After successful social sign up, navigate to profile completion
    navigation.navigate("ProfileSetup");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" size={24} color="#873BEA" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Let's you in</Text>

        <View style={styles.socialButtons}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialSignUp('Google')}>
            <Image source={require("../../../../assets/images/google.png")} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialSignUp('Slack')}>
            <Image source={require("../../../../assets/images/slack.png")} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with Slack</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => handleSocialSignUp('GitHub')}>
            <Image source={require("../../../../assets/images/github.png")} style={styles.socialIcon} />
            <Text style={styles.socialButtonText}>Continue with GitHub</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign up with email</Text>
        </TouchableOpacity>

        <View style={styles.loginPrompt}>
          <Text style={styles.promptText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  backButton: {
    padding: 16,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 36,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 32,
    color: "#000000",
  },
  socialButtons: {
    width: "100%",
    marginBottom: 32,
    gap: 16,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    gap: 12,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  socialButtonText: {
    fontFamily: "Poppins-Regular",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    width: "100%",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E8E8E8",
  },
  orText: {
    marginHorizontal: 16,
    color: "#666666",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  signUpButton: {
    width: "100%",
    padding: 16,
    backgroundColor: "#873BEA",
    alignItems: "center",
    borderRadius: 12,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
  loginPrompt: {
    flexDirection: "row",
    marginTop: 24,
  },
  promptText: {
    color: "#666666",
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  loginLink: {
    color: "#873BEA",
    fontSize: 16,
    fontFamily: "Poppins-SemiBold",
  },
});

export default SignUpOptionsScreen;