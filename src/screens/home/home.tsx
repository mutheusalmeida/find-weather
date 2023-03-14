import { Search } from '../../screens/search'
import { Current } from '../../screens/current'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { theme } from '../../resources/theme'
import { Octicons } from '@expo/vector-icons'
import { TabButton, Text } from '../../styles'

import * as S from './styles'

const { Navigator: TabNavigator, Screen: TabScreen } = createBottomTabNavigator()

export const Home = (): JSX.Element => {
  return (
    <S.HomeContainer>
      <TabNavigator
        initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarStyle: {
            height: 60,
            backgroundColor: theme.colors.dark,
            borderTopColor: 'transparent',
            width: '75%',
            alignSelf: 'center',
          },
          tabBarIconStyle: {
            width: 30,
            height: 30,
          },
          tabBarItemStyle: {
            gap: 6,
            height: 30,
            borderColor: 'transparent'
          },
          tabBarActiveTintColor: theme.colors.white,
          tabBarInactiveTintColor: theme.colors.gray500,
          tabBarActiveBackgroundColor: theme.colors.dark,
          tabBarInactiveBackgroundColor: theme.colors.dark,
          tabBarLabelPosition: 'beside-icon',
          tabBarButton: ({ children, ...props }) => (
            <TabButton {...props}>{children}</TabButton>
          ),
          tabBarIcon: ({ focused }) => (
            <Octicons
              name={route.name === 'Home' ? 'home' : 'search'}
              size={30}
              color={focused ? theme.colors.white : theme.colors.gray500}
            />
          ),
          tabBarLabel: ({ focused, children, color }) => (
            <Text
              fontFamily={focused ? theme.fontFamily.OverpassSemiBold : theme.fontFamily.OverpassLight}
              fontSize={16}
              color={color}
            >{children}</Text>
          ),
        })}
      >
        <TabScreen
          name='Home'
          options={{ headerShown: false }}
          component={Current}
        />

        <TabScreen
          name='Buscar'
          component={Search}
        />
      </TabNavigator>
    </S.HomeContainer>
  )
}
