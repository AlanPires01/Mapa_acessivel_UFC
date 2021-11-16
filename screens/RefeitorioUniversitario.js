import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';
import { Paragraph,Title,Divider } from 'react-native-paper';


export default function RefeitorioUniversitario({ navigation }) {
  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Refeitório Universitário</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <Text style={css.texto}>
              <Title>Refeições</Title> {'\n'}
              <Paragraph>         As refeições são compostas de: Opção proteica, Opção Vegetariana, Arroz, Arroz integral, Feijão,
              Guarnição (farofa, macarrão, cuscuz, purê, pirão, salada crua ou Cozida, sobremesa (fruta ou doce),
              suco). </Paragraph>{'\n'}
              {'\n'}
              <Title>Horário de funcionamento</Title> {'\n'}
              Atendimento: Dias úteis. {'\n'} 
              Almoço: das 11h às 14 horas {'\n'}
              Jantar: das 17h30min às 19 horas {'\n'}
              {'\n'}
              <Title>Valor das refeições</Title> {'\n'}
              Estudante: R$ 1,10. {'\n'}
              Servidor Técnico Administrativo: R$ 7,00. {'\n'}
              Docente: R$ 7,00. {'\n'}
              {'\n'}
              <Title>Contato</Title> {'\n'}
              E-mail: refeitorio@sobral.ufc.br
      </Text>  
     <Divider style={{backgroundColor:'#016EA4', height: 10}} />
       <View style={css.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

