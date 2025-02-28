import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../../navigation/types';
import { ArrowLeft } from "lucide-react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

type SignUpOptionsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUpOptions'>;

const SignUpOptionsScreen = () => {
  const navigation = useNavigation<SignUpOptionsScreenNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft color="#000000" size={24} />
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
            onPress={() => console.log("Google login")}
          >
            <Image source={require("../../../../assets/images/google.png")} style={styles.socialIcon} />
            <Text>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log("Slack login")}
          >
            <Image source={require("../../../../assets/images/slack.png")} style={styles.socialIcon} />
            <Text>Continue with Slack</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.socialButton}
            onPress={() => console.log("GitHub login")}
          >
            <Image source={require("../../../../assets/images/github.png")} style={styles.socialIcon} />
            <Text>Continue with GitHub</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.dividerLine} />
        </View>

        <TouchableOpacity 
          style={styles.signUpButton}
          onPress={() => navigation.navigate("SignUpForm")}
        >
          <Text style={{ color: "white" }}>Sign up with password</Text>
        </TouchableOpacity>

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
    fontWeight: "600",
    marginBottom: 32,
    color: "#000000",
  },
  socialButtons: {
    width: "100%",
    marginBottom: 32,
  },
  socialIcon: {
    width: 24,
    height: 24,
    
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32,
    width: "100%",
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E8E8E8",
  },
  dividerText: {
    marginHorizontal: 16,
    color: "#666666",
    fontSize: 16,
  },
  footer: {
    flexDirection: "row",
    marginTop: 24,
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
  socialButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    padding: 12,
    borderRadius: 8,
  },
  signUpButton: {
    width: "100%",
    color:"white",
    padding: 12,
    backgroundColor: "#873BEA",
    alignItems: "center",
    borderRadius: 8,
  },
 
});

export default SignUpOptionsScreen;