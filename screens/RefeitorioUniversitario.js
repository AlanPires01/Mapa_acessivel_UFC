import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView, useColorScheme} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';
import { Paragraph,Title,Divider } from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function RefeitorioUniversitario({ navigation }) {
  const deviceTheme = useColorScheme();
  var theme = light;
  if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
  return (
    <ScrollView style={theme.container}>
      <Text style={theme.titulo}>Refeitório Universitário</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <Text style={theme.texto}>
              <Title style={theme.linksText}>Refeições</Title> {'\n'}
              <Paragraph style={theme.linksText}>         As refeições são compostas de: Opção proteica, Opção Vegetariana, Arroz, Arroz integral, Feijão,
              Guarnição (farofa, macarrão, cuscuz, purê, pirão, salada crua ou Cozida, sobremesa (fruta ou doce),
              suco). </Paragraph>{'\n'}
              {'\n'}
              <Title style={theme.linksText}>Horário de funcionamento</Title> {'\n'}
              Atendimento: Dias úteis. {'\n'} 
              Almoço: das 11h às 14 horas {'\n'}
              Jantar: das 17h30min às 19 horas {'\n'}
              {'\n'}
              <Title style={theme.linksText}>Valor das refeições</Title> {'\n'}
              Estudante: R$ 1,10. {'\n'}
              Servidor Técnico Administrativo: R$ 7,00. {'\n'}
              Docente: R$ 7,00. {'\n'}
              {'\n'}
              <Title style={theme.linksText}>Contato</Title> {'\n'}
              E-mail: refeitorio@sobral.ufc.br
      </Text>  
     <Divider style={{backgroundColor:'#016EA4', height: 10}} />
       <View style={theme.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

