import React from 'react';
import {View, Image, ScrollView, useColorScheme} from 'react-native';
import { Paragraph,Title} from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function HomeScreen() {
  const deviceTheme = useColorScheme();
  var theme = light; var foto = true;
  if(deviceTheme == "dark"){theme = dark; foto = false;}else {theme = light; foto = true;}
  var icon = foto ? require('../assets/tae1.jpeg') : require('../assets/tae1.png');
  var icon2 = foto ? require('../assets/logo_ufc.png') : require('../assets/logo.png');
  return (
    <ScrollView style={theme.container}>
        <View style={{flex: 1, flexDirection: 'row',justifyContent:'center', margin: 25}}>
            <Image 
              source={icon2}
              style={{width:150,height:150}}
            />
            <Image 
              source={icon}
              style={{width:200,height:150}}
            />
        </View>
          <Title style={theme.titulo}>Bem-Vindo!</Title>
        		<Paragraph style={theme.texto}>         O Grupo TAE apresenta o aplicativo de Mapa Acessíveis que tem como finalidade apresentar um mapa acessível 
            e com informações sobre a Universidade Federal do Ceará (UFC) no Campus Sobral,
            permitindo tornar o campus mais acessível e visando ampliar a autonomia de
            alunos novatos com ou sem algum tipo de deficiência.       
            </Paragraph>
	   </ScrollView>
  );
}

