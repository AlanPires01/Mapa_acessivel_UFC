import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';

export default function RefeitorioUniversitario({ navigation }) {
  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Refeitório Universitário</Text>
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <Text style={css.texto}>
              Refeições: {'\n'}
              As refeições são compostas de: Opção proteica, Opção Vegetariana, Arroz, Arroz integral, Feijão,
              Guarnição (farofa, macarrão, cuscuz, purê, pirão, salada crua ou Cozida, sobremesa (fruta ou doce),
              suco). {'\n'}
              {'\n'}
              Horário de funcionamento: {'\n'}
              Atendimentos: Dias úteis. {'\n'} 
              Almoço: das 11h às 14 horas {'\n'}
              Jantar: das 17h30min às 19 horas {'\n'}
              {'\n'}
              Valor das refeições: {'\n'}
              Estudante: R$ 1,10. {'\n'}
              Servidor Técnico Administrativo: R$ 7,00. {'\n'}
              Docente: R$ 7,00. {'\n'}
              {'\n'}
              Contato: {'\n'}
              E-mail: refeitorio@sobral.ufc.br
      </Text>  
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
       <View style={css.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

