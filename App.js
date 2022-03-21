import React from 'react';
import {Text, View, Button, ScrollView, FlatList,Image, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer,DefaultTheme,DarkTheme } from '@react-navigation/native';
import Contato from './screens/Contato';
import Mapa from './screens/Mapa';
import MapaMed from './screens/MapaMed';
import HomeScreen from './screens/HomeScreen';
import QuemSomosNos from './screens/QuemSomosNos';
import Sigga from './screens/Sigaa/Sigga';
import { Icon } from 'react-native-elements';
import {css} from './assets/css/css';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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

function Mapas() {
  return (
    <Tab.Navigator
    screenOptions={opcoes}
    screenOptions={{headerShown:false}}
    >
      <Tab.Screen name="Mucambinho" component={Mapa}
      options={{
        tabBarIcon: () => (
          <Icon name="map" type='font-awesome-5' style={css.iconApp} />
        ),
      }}
      />
      <Tab.Screen name="Famed" component={MapaMed} 
       options={{
        tabBarIcon: () => (
          <Icon name="map-marked-alt" type='font-awesome-5' style={css.iconApp} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
       screenOptions={
        {
          headerStyle:{
            backgroundColor:'#016EA4',
          },
          headerTitleAlign:'center',
          headerTitleStyle:{
            color:'#FFFFFF',
          },
          headerTintColor:'#FFFFFF',
          header:(props)=>{
            return (
              <View style={{
                  height:92,
                  backgroundColor: "#016EA4",
                }}>
                <View style={{
                  flex:1, 
                  flexDirection:'row', 
                  alignItems:'flex-end', 
                  justifyContent:'center',
                  padding:10
                }}>
                  <View style={{
                    position:"absolute",
                    left:0,
                    bottom:0,
                  }}>
                    <TouchableOpacity accessible={true} accessibilityLabel="Menu Lateral" accessibilityRole={"button"} onPress={()=>{props.navigation.openDrawer()}}>
                      <Icon color="white" name='menu-outline' type='ionicon' style={css.iconApp}/>
                    </TouchableOpacity>
                  </View>
                  <View accessible={true} accessibilityRole={'header'}>
                    <Text style={{color:"white", fontSize:20, fontWeight:'bold'}}>{props.route.name}</Text>
                  </View>
                </View>
              </View>
            )
          }
        }
       }

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
          <Drawer.Screen name="Mapas" component={Mapas}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='map-outline'
                  type='ionicon'
                  style={css.iconApp}
                />
            ),
            
          }}/>
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
          <Drawer.Screen name="Sobre nós" component={QuemSomosNos}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='people-outline'
                  type='ionicon'
                  style={css.iconApp}
                />
            )  
          }}/>
          <Drawer.Screen name="Acessar Sigaa" component={Sigga}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='desktop-outline'
                  type='ionicon'
                  style={css.iconApp}
                />
            )  
          }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
