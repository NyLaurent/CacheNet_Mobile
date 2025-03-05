"use client"

import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, User, Settings, Database } from "lucide-react-native"
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated"
import type { BottomTabBarProps, BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"

import HomeTab from "./HomeTab"
import SearchTab from "./SearchTab"
import ProfileTab from "./ProfileTab"
import SettingsTab from "./SettingsTab"

// Define the tab parameter list
type TabParamList = {
  Home: undefined
  Cache: undefined
  Profile: undefined
  Setting: undefined
}

const Tab = createBottomTabNavigator<TabParamList>()

// Define proper types for our components
interface TabButtonProps {
  isFocused: boolean
  onPress: () => void
  icon: React.ReactNode
  label: string
}

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

// Custom animated tab bar button
const AnimatedTabButton: React.FC<TabButtonProps> = ({ isFocused, onPress, icon, label }) => {
  const scale = useSharedValue(1)

  React.useEffect(() => {
    scale.value = withSpring(isFocused ? 1.2 : 1, {
      damping: 10,
      stiffness: 100,
    })
  }, [isFocused, scale])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <View style={styles.tabButtonContainer}>
      {isFocused && <View style={styles.activeBackground} />}
      <AnimatedTouchable onPress={onPress} style={[styles.tabButton, animatedStyle]}>
        {icon}
      </AnimatedTouchable>
      <Text style={[styles.tabLabel, { color: isFocused ? "#7C3AED" : "#94A3B8" }]} numberOfLines={1}>
        {label}
      </Text>
    </View>
  )
}

// Custom tab bar component with proper types
const CustomTabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key]
        const isFocused = state.index === index

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, { merge: true })
          }
        }

        let icon
        if (route.name === "Home") {
          icon = <Home color={isFocused ? "#7C3AED" : "#94A3B8"} size={22} />
        } else if (route.name === "Cache") {
          icon = <Database color={isFocused ? "#7C3AED" : "#94A3B8"} size={22} />
        } else if (route.name === "Profile") {
          icon = <User color={isFocused ? "#7C3AED" : "#94A3B8"} size={22} />
        } else if (route.name === "Setting") {
          icon = <Settings color={isFocused ? "#7C3AED" : "#94A3B8"} size={22} />
        }

        return <AnimatedTabButton key={index} isFocused={isFocused} onPress={onPress} icon={icon} label={route.name} />
      })}
    </View>
  )
}

// Screen options with proper typing
const screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
}

const HomeScreen: React.FC = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={screenOptions}
      backBehavior="initialRoute"
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Cache" component={SearchTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
      <Tab.Screen name="Setting" component={SettingsTab} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    backgroundColor: "white",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 60,
    paddingVertical: 8,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    borderTopWidth: 0,
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  tabButtonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  activeBackground: {
    position: "absolute",
    height: 40,
    width: 40,
    borderRadius: 20,
    // backgroundColor: "rgba(124, 58, 237, 0.1)",
  },
  tabLabel: {
    fontSize: 10,
    marginTop: 2,
    fontWeight: "500",
    fontFamily: "Poppins-Regular",
    maxWidth: "90%",
  },
})

export default HomeScreen

