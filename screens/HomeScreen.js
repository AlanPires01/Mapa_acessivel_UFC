import React from 'react';
import {View, Text,Image,ScrollView} from 'react-native';
import {css} from '../assets/css/css';
import { Paragraph,Title, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  
  return (
    <ScrollView style={css.container}>
        <View style={{flex: 1, flexDirection: 'row',justifyContent:'center', margin: 2}}>
            <Image 
              source={require('../assets/logo_ufc.png')}
              style={{width:150,height:150}}
            />
            <Image 
              source={require('../assets/tae1.jpeg')}
              style={{width:200,height:150}}
            />
        </View>
          <Title style={css.titulo}>Bem-Vindo!</Title>
        		<Paragraph style={css.texto}>         O Grupo TAE apresenta o aplicativo de Mapa Acessíveis que tem como finalidade apresentar um mapa acessível 
            e com informações sobre a Universidade Federal do Ceará (UFC) no Campus Sobral,
            permitindo tornar o campus mais acessível e visando ampliar a autonomia de
            alunos novatos com ou sem algum tipo de deficiência.       
            </Paragraph>
	   </ScrollView>
  );
}

