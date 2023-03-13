import { Search } from '../../screens/search'
import { Current } from '../../screens/current'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { theme } from '../../resources/theme'
import { Octicons } from '@expo/vector-icons'

import * as S from './styles'

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator()

export const Home = (): JSX.Element => {
  return (
    <S.HomeContainer>
      <TabNavigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Octicons
              name={route.name === 'Home' ? 'home' : 'search'}
              size={30}
              color={focused ? theme.colors.white : theme.colors.gray500}
            />
          ),
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray500,
          tabBarActiveBackgroundColor: theme.colors.dark,
          tabBarInactiveBackgroundColor: theme.colors.dark,
          tabBarLabelPosition: 'beside-icon',
        })}
      >
        <TabScreen
          name='Home'
          options={{ headerShown: false }}
          component={Current}
        />

        <TabScreen
          name='Search'
          options={{ headerShown: false }}
          component={Search}
        />
      </TabNavigator>
    </S.HomeContainer>
  )
}
