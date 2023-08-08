
import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import FormLogin from "./src/pages/FormLogin";
import FormRegister from "./src/pages/FormRegister";
import MyMenu from "./src/pages/MyMenu";
import Figure from './src/component/Figure';
import Abecedario from './src/component/Abecedario';
import BottomNavigation from './src/component/BottomNavigation';
import Emotions from './src/component/Emotions';
import Fruits from './src/component/Fruits';
import Animals from './src/component/Animals';
import Numbers from './src/component/Numbers';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false, // Oculta el encabezado
      }}
    >
      <Stack.Screen name="Login" component={FormLogin} />
      <Stack.Screen name="Register" component={FormRegister} />
      <Stack.Screen name="Menu" component={MyMenu} />
      <Stack.Screen name="Abecedario" component={Abecedario} />
      <Stack.Screen name="Figura" component={Figure} />
      <Stack.Screen name="Emociones" component={Emotions} />
      <Stack.Screen name="Frutas" component={Fruits} />
      <Stack.Screen name="Animales" component={Animals} />
      <Stack.Screen name="Numeros" component={Numbers} />
      
    </Stack.Navigator>
    
  </NavigationContainer>
  );
}