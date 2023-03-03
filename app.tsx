import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Overpass_700Bold } from '@expo-google-fonts/overpass';

export default function App() {
  const [fontsLoaded] = useFonts({
    Overpass_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Overpass_700Bold', fontSize: 36 }}>Hello, World!</Text>
      <Text>Hello, World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
