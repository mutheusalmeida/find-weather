import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from '@expo-google-fonts/overpass'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useCallback } from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { theme } from './src/resources/theme'
import { Welcome } from './src/screens/welcome'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from './src/screens/home'

SplashScreen.preventAutoHideAsync()

const Stack = createNativeStackNavigator()

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.dark};
`

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_300Light,
    Overpass_400Regular,
    Overpass_600SemiBold,
    Overpass_700Bold,
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
    <ThemeProvider theme={theme}>
      <Container onLayout={onLayoutRootView}>
        <StatusBar style="light" />

        <NavigationContainer>

          <Stack.Navigator
            initialRouteName='Welcome'
          >
            <Stack.Screen name='Welcome' component={Welcome} />
            <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </ThemeProvider>
  )
}
