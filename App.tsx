import { SafeAreaProvider } from "react-native-safe-area-context"
import { MenuProvider } from 'react-native-popup-menu'
import AppNavigator from "./navigation/AppNavigator"
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import { Text, TextInput } from 'react-native'
import { globalStyles } from './theme/globalStyles'

// Set default props for Text and TextInput
const TextAny = Text as any;
const TextInputAny = TextInput as any;

TextAny.defaultProps = {
  style: globalStyles.text
};

TextInputAny.defaultProps = {
  style: globalStyles.textInput
};

SplashScreen.preventAutoHideAsync()

const App = () => {
  const [fontsLoaded] = useFonts({
    'Poppins-Regular': Poppins_400Regular,
    'Poppins-Medium': Poppins_500Medium,
    'Poppins-SemiBold': Poppins_600SemiBold,
    'Poppins-Bold': Poppins_700Bold,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <MenuProvider>
      <SafeAreaProvider onLayout={onLayoutRootView}>
        <AppNavigator />
      </SafeAreaProvider>
    </MenuProvider>
  )
}

export default App

