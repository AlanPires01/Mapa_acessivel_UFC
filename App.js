import React from 'react';
import {Text, View, Button, ScrollView, FlatList,Image, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import Contato from './screens/Contato';
import HomeScreen from './screens/HomeScreen';
import { Icon } from 'react-native-elements';
import {css} from './assets/css/css';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) =>{
  return( 
    <DrawerContentScrollView {...props}>
      <View style={{flexDirection: 'row',
        justifyContent:'center'}}>
        <Image 
        source={require('./assets/logo_ufc.png')}
        style={css.logoApp}
        />
      </View>
       <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
};

const opcoes = {
  headerStyle:{
    backgroundColor:'#016EA4',
  },
  headerTitleAlign:'center',
  headerTitleStyle:{
    color:'#FFFFFF',
  },
  headerTintColor:'#FFFFFF'
};

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
       screenOptions={opcoes} 
       initialRouteName="Home" 
       drawerContent={(props) => <CustomDrawer {...props}/>} >
        <Drawer.Screen name="Home" component={HomeScreen}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='home-outline'
                  type='ionicon'
                  style={css.iconApp}
                />
            )  
          }}
         />
        <Drawer.Screen name="Informações" component={Contato}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='document-text-outline'
                  type='ionicon'
                  style={css.iconApp}
                />
            )  
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
