import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, User, Settings, Database } from "lucide-react-native"

import HomeTab from "./HomeTab"
import SearchTab from "./SearchTab"
import ProfileTab from "./ProfileTab"
import SettingsTab from "./SettingsTab"

const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let icon

          if (route.name === "Home") {
            icon = <Home color={color} size={size} />
          } else if (route.name === "Cache") {
            icon = <Database color={color} size={size} />
          } else if (route.name === "Profile") {
            icon = <User color={color} size={size} />
          } else if (route.name === "Setting") {
            icon = <Settings color={color} size={size} />
          }

          return icon
        },
        tabBarActiveTintColor: "#7C3AED",
        tabBarInactiveTintColor: "#94A3B8",
        tabBarStyle: {
          height: 60,
          paddingBottom: 8,
          paddingTop: 8,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Cache" component={SearchTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
      <Tab.Screen name="Setting" component={SettingsTab} />
    </Tab.Navigator>
  )
}

export default HomeScreen

