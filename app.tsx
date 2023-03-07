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

SplashScreen.preventAutoHideAsync()

const Container = styled.View`
  flex: 1;
  background-color: #1B1D22;
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

        <Welcome />
      </Container>
    </ThemeProvider>
  )
}
