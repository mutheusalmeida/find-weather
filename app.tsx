import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Overpass_600SemiBold } from '@expo-google-fonts/overpass';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.title}>Descubra o Clima na sua Cidade</Text>
      <Text style={styles.desc}>Com o FindWeather nunca ficou tão fácil ter a previsão do tempo na palma da sua mão</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1D22',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 33,
    lineHeight: 42,
    fontFamily: 'Overpass_600SemiBold',
    maxWidth: 304,
    textAlign: 'center',
    marginBottom: 33,
  },
  desc: {
    color: '#AFAFAF',
    fontSize: 22,
    lineHeight: 28,
    fontFamily: 'Overpass_600SemiBold',
    maxWidth: 360,
    textAlign: 'center',
  }
});
