import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './types';

import SplashScreen from "../components/screens/Splash/SpashScreen"
import OnboardingScreen from "../components/screens/Onboarding/OnboardingScreen"
import SignUpOptionsScreen from "../components/screens/Auth/Signup/SignUpOptionsScreen"
import SignInScreen from "../components/screens/Auth/Signin/SignInScreen"
import ProfileCompletionScreen from "../components/screens/Auth/ProfileCompletion"
import AuthSuccessScreen from "../components/screens/Auth/AuthSuccessScreen"
import HomeScreen from "../components/screens/Home/index"
import SignUpFormScreen from "components/screens/Auth/Signup/SignUpFormScreen";
import FillProfileScreen from '../components/screens/ProfileSetup/FillProfileScreen';
import AppSelectionScreen from '../components/screens/ProfileSetup/AppSelectionScreen';
import CategorySelectionScreen from '../components/screens/ProfileSetup/CategorySelectionScreen';
import SetupSuccessScreen from '../components/screens/ProfileSetup/SetupSuccessScreen';
import NotificationsScreen from "../components/common/Notifications";

const Stack = createStackNavigator<RootStackParamList>()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignUpOptions" component={SignUpOptionsScreen} />
        <Stack.Screen name="SignUpForm" component={SignUpFormScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="ProfileSetup" component={FillProfileScreen} />
        <Stack.Screen name="AppSelection" component={AppSelectionScreen} />
        <Stack.Screen name="CategorySelection" component={CategorySelectionScreen} />
        <Stack.Screen name="SetupSuccess" component={SetupSuccessScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileCompletion" component={ProfileCompletionScreen} />
        <Stack.Screen name="AuthSuccess" component={AuthSuccessScreen} />
        <Stack.Screen name="Notifications" component={NotificationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator

