import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Home, User, Settings, Search } from "lucide-react-native"

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
          } else if (route.name === "Search") {
            icon = <Search color={color} size={size} />
          } else if (route.name === "Profile") {
            icon = <User color={color} size={size} />
          } else if (route.name === "Settings") {
            icon = <Settings color={color} size={size} />
          }

          return icon
        },
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Search" component={SearchTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
      <Tab.Screen name="Settings" component={SettingsTab} />
    </Tab.Navigator>
  )
}

export default HomeScreen

