import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from "../components/screens/Splash/SpashScreen"
import OnboardingScreen from "../components/screens/Onboarding/OnboardingScreen"
import SignUpScreen from "../components/screens/Auth/SignupScreen"
import SignInScreen from "../components/screens/Auth/SignInScreen"
import ProfileCompletionScreen from "../components/screens/Auth/ProfileCompletion"
import AuthSuccessScreen from "../components/screens/Auth/AuthSuccessScreen"
import HomeScreen from "../components/screens/Home/index"

const Stack = createStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ProfileCompletion" component={ProfileCompletionScreen} />
        <Stack.Screen name="AuthSuccess" component={AuthSuccessScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

