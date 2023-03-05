import {
  useFonts,
  Overpass_300Light,
  Overpass_400Regular,
  Overpass_600SemiBold,
  Overpass_700Bold,
} from '@expo-google-fonts/overpass'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'
import styled from 'styled-components/native'
import { Welcome } from './src/welcome'

SplashScreen.preventAutoHideAsync()

const Container = styled.View`
  flex: 1;
  background-color: '#1B1D22';
  align-items: 'center';
  justify-content: 'center';
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
    <Container onLayout={onLayoutRootView}>
      <Welcome />
    </Container>
  )
}
