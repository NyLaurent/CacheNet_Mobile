import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, FlatList, SafeAreaView, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from '../../../navigation/types';

type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const onboardingData = [
  {
    title: "Caching content and enjoy",
    description: "accessing different things with CacheNet as if you are online while you are offline",
    image: require("../../../assets/images/logo.png"),
  },
  {
    title: "Fast and Reliable",
    description: "Experience seamless content access with our advanced caching technology",
    image: require("../../../assets/images/logo.png"),
  },
  {
    title: "Stay Connected Offline",
    description: "Access your favorite content anytime, anywhere, even without an internet connection",
    image: require("../../../assets/images/logo.png"),
  },
];

const OnboardingScreen = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: SCREEN_WIDTH, height: SCREEN_HEIGHT });
  const flatListRef = useRef<FlatList>(null);
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({ width: window.width, height: window.height });
    });

    return () => subscription?.remove();
  }, []);

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      flatListRef.current?.scrollToIndex({ index: currentPage + 1, animated: true });
    } else {
      navigation.navigate("SignUp");
    }
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / dimensions.width);
    setCurrentPage(index);
  };

  const renderItem = ({ item }: { item: typeof onboardingData[0] }) => (
    <View style={[styles.slide, { width: dimensions.width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width: dimensions.width * 0.4, height: dimensions.width * 0.4 }]}
        resizeMode="contain"
      />
      <Text style={[styles.title, { maxWidth: dimensions.width * 0.8 }]}>{item.title}</Text>
      <Text style={[styles.description, { maxWidth: dimensions.width * 0.8 }]}>{item.description}</Text>
    </View>
  );

  const ProgressDot = ({ active }: { active: boolean }) => (
    <View style={[styles.dot, active && styles.activeDot]} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        renderItem={renderItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScroll}
        keyExtractor={(_, index) => index.toString()}
      />

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {onboardingData.map((_, index) => (
            <ProgressDot key={index} active={index === currentPage} />
          ))}
        </View>

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>
            {currentPage === onboardingData.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  image: {
    marginBottom: 40,
    
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
    color: "#000000",
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666666",
    lineHeight: 24,
  },
  footer: {
    paddingHorizontal: 20,
    paddingBottom: Platform.OS === 'ios' ? 0 : 20,
  },
  dotsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E0E0E0",
    marginHorizontal: 4,
  },
  activeDot: {
    width: 24,
    backgroundColor: "#873BEA",
  },
  button: {
    backgroundColor: "#873BEA",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});

export default OnboardingScreen;