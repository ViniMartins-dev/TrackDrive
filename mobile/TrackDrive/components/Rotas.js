import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Track from '../components/Track';
import Home from '../components/Home';
import Cadastro from '../components/Cadastro';
import Atualizar from '../components/Atualizar';
import CadastroP from '../components/CadastroP';
import Perfil from '../components/Perfil';
import PerfilEdit from './PerfilEdit';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Telas públicas (sem login)
function PublicRoutes({ setUser }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Track">
        {props => <Track {...props} setUser={setUser} />}
      </Stack.Screen>
      <Stack.Screen name="CadastroP">
         {props=> <CadastroP {...props} setUser={setUser} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

// Telas privadas (com login)
function TabRoutes({ setUser, user }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Cadastro') iconName = 'plus';
          else if (route.name === 'Perfil') iconName = 'user';

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#47A9FF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Perfil">
        {props => <Perfil {...props} setUser={setUser} user={user} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

function PrivateRoutes({ setUser, user }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs">
        {props => <TabRoutes {...props} setUser={setUser} user={user} />}
      </Stack.Screen>
      <Stack.Screen name="Atualizar" component={Atualizar} />
      <Stack.Screen name="PerfilEdit" component={PerfilEdit} />
    </Stack.Navigator>
  );
}

// Componente principal que decide entre rotas públicas ou privadas
export default function Rotas() {
  const [user, setUser] = useState('');

  return (
    <NavigationContainer>
      {user ? (
        <PrivateRoutes setUser={setUser} user={user}/>
      ) : (
        <PublicRoutes setUser={setUser} />
      )}
    </NavigationContainer>
  );
}