import React, { useEffect, useRef } from "react";
import { View, Image, StyleSheet, Text, Animated, Easing } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../navigation/types';

type SplashScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Splash'>;

const NUM_LINES = 12;

const SplashScreen = () => {
  const navigation = useNavigation<SplashScreenNavigationProp>();
  
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const spinValue = useRef(new Animated.Value(0)).current;

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1200,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
    
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 8,
        tension: 40,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace("Onboarding");
    }, 5000);

    return () => clearTimeout(timer);
  }, [fadeAnim, scaleAnim, spinValue, navigation]);

  const renderLines = () => {
    return [...Array(NUM_LINES)].map((_, index) => (
      <View
        key={index}
        style={[
          styles.line,
          {
            transform: [
              { rotate: `${index * (360 / NUM_LINES)}deg` },
              { translateY: 15 },
            ],
            opacity: 1 - (index * (1 / NUM_LINES)),
          },
        ]}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title} className="font-bold">CacheNet</Text>
      </Animated.View>
      
      <Animated.View style={[styles.loaderContainer, { transform: [{ rotate: spin }] }]}>
        {renderLines()}
      </Animated.View>
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
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  title: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
    fontFamily: "Poppins-Bold"
  },

  loaderContainer: {
    position: "absolute",
    bottom: 150,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  line: {
    position: "absolute",
    width: 3,
    height: 10,
    borderRadius: 1.5,
    backgroundColor: "#873BEA",
  },
});

export default SplashScreen;