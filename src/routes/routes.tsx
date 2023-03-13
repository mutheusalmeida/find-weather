import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Welcome } from '../screens/welcome'
import { Home } from '../screens/home'

const { Navigator, Screen } = createNativeStackNavigator()

export const Routes = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName='Welcome'
      >
        <Screen
          name='Welcome'
          options={{ headerShown: false }}
          component={Welcome}
        />

        <Screen
          name='App'
          options={{ headerShown: false }}
          component={Home}
        />
      </Navigator>
    </NavigationContainer>
  )
}
