import React from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Contato from './screens/Contato';
import Mapa from './screens/Mapa';
import HomeScreen from './screens/HomeScreen';
import QuemSomosNos from './screens/QuemSomosNos';
import Sigga from './screens/Sigaa/Sigga';
import RU from './screens/RU/RU';
import { Icon } from 'react-native-elements';
import {css} from './assets/css/css';
import { meuContexto, convertTime } from './Contexto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';
import {dark} from './assets/css/dark';
import {light} from './assets/css/light';

const Drawer = createDrawerNavigator();

const CustomDrawer = (props) =>{
  const timer = React.useContext(meuContexto);
  return( 
    <DrawerContentScrollView {...props}>
      <View style={{flexDirection: 'row',
        justifyContent:'center'}}>
        <Image 
        source={require('./assets/icon1.png')}
        style={css.logoApp}
        />
      </View>
      <DrawerItemList {...props}/>
      <View>
        <Text style={{color:"gray",marginTop:70, textAlign:"center"}}>Tempo de uso = {convertTime(timer).minutes.toString().padStart(2,0)}:{convertTime(timer).seconds.toString().padStart(2,0)}</Text>
      </View>
    </DrawerContentScrollView>
  );
};

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(2, 218, 247)',
    background: 'rgb(13, 14, 33)',
    card: 'rgb(10, 10, 40)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(255, 255, 255)',
    notification: 'rgb(255, 255, 255)',
  },
};

export default function App() {
  const deviceTheme = useColorScheme();
  var theme = light;
  if(deviceTheme=="dark"){theme = dark;}else {theme = light;}
  const [valor, setValor] = React.useState(1);
  React.useEffect(()=>{
    let intervalo = null;

    console.log("Iniciado timer");
    AsyncStorage.getItem("@tempoUso", (err, item)=>{
      if(item === null){
        AsyncStorage.setItem("@tempoUso","0");
      }
      else{
        setValor(parseInt(item));
      }
    });

    intervalo = setInterval(()=>{
      setValor(value => {
        if(value % 5 === 0){
          AsyncStorage.setItem("@tempoUso", value.toString());
        }
        return value+1;
      });
      
      
    },1000);
    
    return ()=>{
      console.log("Timer Parado!");
      AsyncStorage.setItem("@tempoUso", valor.toString());
      clearInterval(intervalo);
    }
  }, []);
  return (
    <NavigationContainer theme={deviceTheme === 'dark' ? MyTheme : DefaultTheme}>
      <meuContexto.Provider value={valor}>
      <Drawer.Navigator
       useLegacyImplementation={true}
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
                  height:StatusBar.currentHeight+24,
                  backgroundColor: "#016EA4",
                  elevation:10
                }}>
                  <StatusBar backgroundColor={"#016EA4"}/>
                <View style={{
                  flex:1, 
                  flexDirection:'row', 
                  alignItems:'center', 
                  justifyContent:'center',
                }}>
                  <View style={{
                    position:"absolute",
                    left:10
                  }}>
                    <TouchableOpacity accessible={true} accessibilityLabel="Menu Lateral" accessibilityRole={"button"} onPress={()=>{props.navigation.openDrawer()}}>
                      <Icon color="white" name='menu-outline' type='ionicon' style={css.iconApp} size={38}/>
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
                  style={theme.iconApp}
                />
            ) 
          }}
         />
          <Drawer.Screen name="Mapas" component={Mapa}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='map-outline'
                  type='ionicon'
                  style={theme.iconApp}
                />
            ),
            
          }}/>
        <Drawer.Screen name="Informações" component={Contato}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='document-text-outline'
                  type='ionicon'
                  style={theme.iconApp}
                />
            )  
          }}/>
        <Drawer.Screen name="Restaurante" component={RU}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='restaurant-outline'
                  type='ionicon'
                  style={theme.iconApp}
                />
            )  
          }}/>
          <Drawer.Screen name="Sobre nós" component={QuemSomosNos}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='people-outline'
                  type='ionicon'
                  style={theme.iconApp}
                />
            )  
          }}/>
          <Drawer.Screen name="Acessar Sigaa" component={Sigga}
          options={{
            drawerIcon: ({ focused, size }) => (
                <Icon
                  name='desktop-outline'
                  type='ionicon'
                  style={theme.iconApp}
                />
            )  
          }}/>
      </Drawer.Navigator>
      </meuContexto.Provider>
    </NavigationContainer>
  );
}
