import React from 'react';
import {Text,Image, View,StyleSheet,TouchableOpacity} from 'react-native';

import Home from '../screens/Home';
import Notifications from '../screens/Notifications';
import Favorite from '../screens/Favorite';
import Settings from '../screens/Settings';
import Add from '../screens/Add';
import Login from '../screens/Login';
// import AddProduct from '../screens/AddProduct';


import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import IonIcon from 'react-native-vector-icons/Ionicons';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import AddProduct from '../screens/AddProduct';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
    const activeTintLabelColor = '#569EF8';
    const inactiveTintLabelColor = '#909090';

  return (
    <Tab.Navigator
      initialRouteName="home"
      tabBarOptions={{
        activeTintColor: '#0880AE',
        inactiveTintColor: '#CAD1E5',
        style:{ backgroundColor:'#fff',paddingBottom:4,paddingTop:4},
        showLabel: false
        }
      } 
    > 
        

        <Tab.Screen
            name="home"
            component={Home}
            options={{
            tabBarIcon: ({ color, size }) => (
                <Entypo name='home' size={25} color={color}/>
                ),
            }}
            
        />

        <Tab.Screen
            name="notifications"
            component={Notifications}
            options={{
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="notifications" color={color} size={25} />
            )
            }}
        />

        <Tab.Screen 
            name="add"
            component={AddProduct}
            options={{
                tabBarLabel:'',
                tabBarIcon:({color}) =>(
                    <View style={styles.plus}>
                        <IonIcon name="add" color='#FFF' size={30}/>
                    </View>
                )
            }}
        />
        

        <Tab.Screen
            name="favorite"
            component={Favorite}
            options={{
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="heart" color={color} size={25} />

            ),
            }}
        />
        <Tab.Screen
            name="settings"
            component={Settings}
            options={{
            
            
            tabBarIcon: ({ color, size }) => (
                <IonIcon name="settings-sharp" color={color} size={25} />
            ),
            }}
        />
        
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
    plus:{
        position:'absolute',
        bottom:15,
        height: 60,
        width: 60,
        borderRadius:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#2188AF'
    }
})