import React from 'react';
import { Text, View, Button, ScrollView, FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Contato from './screens/Contato';
import HomeScreen from './screens/HomeScreen';
import { Icon } from 'react-native-elements';


const Drawer = createDrawerNavigator();

const opcoesTela = {
  headerStyle:{
    backgroundColor:'#c1a156',
  },
  headerTitleAlign:'center',
  headerTitleStyle:{
    color:'black',
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={opcoesTela} initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Informações" component={Contato}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}