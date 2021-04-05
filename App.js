import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import Notifications from './src/screens/Notifications';
import Favorite from './src/screens/Favorite';
import Settings from './src/screens/Settings';
import ContainerTab from './src/screens/ContainerTab';
import Annotations from './src/screens/Annotations';
import Details from './src/screens/Details';
import Login from './src/screens/Login'
import OTB from './src/screens/OTB'
import PersonData from './src/screens/PersonData';
import Add from './src/screens/Add';
import Messages from './src/screens/Messages';
import Msg from './src/screens/Msg';
import Map from './src/screens/Map';
import Confirmation from './src/screens/Confirmation';
import Done from './src/screens/Done';
import AddProduct from './src/screens/AddProduct';


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="container"
        component={ContainerTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="otb"
        component={OTB}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="personData"
        component={PersonData}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="notifiction"
        component={Notifications}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="add"
        component={Add}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="addProduct"
        component={AddProduct}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="favorite"
        component={Favorite}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="messages"
        component={Messages}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="msg"
        component={Msg}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="annotations"
        component={Annotations}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="details"
        component={Details}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="map"
        component={Map}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="confirmation"
        component={Confirmation}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="done"
        component={Done}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}