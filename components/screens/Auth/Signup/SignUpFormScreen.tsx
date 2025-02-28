import React, { useState } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../navigation/types';
import { ArrowLeft, Eye, EyeOff, Mail, Lock, Github, Facebook } from "lucide-react-native";
import { FaArrowLeft } from "react-icons/fa";


type SignUpFormScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpForm'>;

const SignUpFormScreen = () => {
  const navigation = useNavigation<SignUpFormScreenNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignUp = () => {
    // Implement sign up logic here
    console.log("Sign up with:", email, password);
    // After successful sign up, navigate to SignIn
    navigation.navigate("SignIn");
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <FaArrowLeft color="#000000" size={24} />
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={require("../../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Create Your Account</Text>

        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Mail size={20} color="#666666" />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              style={styles.textInput}
            />
          </View>

          <View style={styles.inputContainer}>
            <Lock size={20} color="#666666" />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.textInput}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} color="#666666" /> : <Eye size={20} color="#666666" />}
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              onPress={() => setRememberMe(!rememberMe)}
            >
              <Text style={styles.checkboxLabel}>{rememberMe ? "☑" : "☐"}</Text>
            </TouchableOpacity>
            <Text style={styles.checkboxLabel}>Remember me</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSignUp}
        >
          <Text style={{ color: "#FFFFFF" }}>Sign up</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or continue with</Text>

        <View style={styles.socialIcons}>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log("GitHub signup")}
          >
            <Github size={24} />
          </TouchableOpacity>
                    <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log("Facebook signup")}
          >
            <Facebook size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log("Google signup")}
          >
            <Image source={require("../../../../assets/images/google.png")} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.footerLink}>Sign in</Text>
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
    paddingHorizontal: 24,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 24,
    tintColor: "#873BEA",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 32,
    color: "#000000",
  },
  form: {
    width: "100%",
    gap: 16,
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    color: "#666666",
  },
  orText: {
    fontSize: 16,
    color: "#666666",
    marginVertical: 24,
  },
  socialIcons: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 32,
  },
  socialIcon: {
    width: 24,
    height: 24,
  },
  footer: {
    flexDirection: "row",
  },
  footerText: {
    color: "#666666",
    fontSize: 16,
  },
  footerLink: {
    color: "#873BEA",
    fontSize: 16,
    fontWeight: "600",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    flex: 1,
  },
  signUpButton: {
    backgroundColor: "#873BEA",
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
    width: "100%",
  },
  socialButton: {
    padding: 8,
  },
});

export default SignUpFormScreen;