import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Track from '../components/Track';
import Home from '../components/Home';
import Cadastro from '../components/Cadastro';
import Atualizar from '../components/Atualizar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Track') iconName = 'map';
          else if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Cadastro') iconName = 'plus';
          else if (route.name === 'Atualizar') iconName = 'plus';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#47A9FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false, 
      })}
    >
      <Tab.Screen name="Track" component={Track} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Atualizar" component={Atualizar} />

    </Tab.Navigator>
  );
}

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tabs" component={TabRoutes} options={{ headerShown: false }} />

        <Stack.Screen name="Atualizar" component={Atualizar} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
