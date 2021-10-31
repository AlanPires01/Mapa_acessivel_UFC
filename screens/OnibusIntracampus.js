import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';

export default function OnibusIntracampus({ navigation }) {
  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Ônibus Intracampus</Text>
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <Text style={css.texto}>
              O Campus de Sobral oferece serviço de transporte gratuito aos membros da comunidade acadêmica através do “Ônibus Intracampus”.
               O ônibus intracampus funciona durante os dias letivos percorrendo trajeto que interliga os vários prédios nos quais há atividades da UFC. {'\n'}
               {'\n'}
                Horario de funcionamento {'\n'}
                O ônibus intracampus sai do Mucambinho nos seguintes horários: {'\n'}
                -07h15 {'\n'}
                -08h00 {'\n'}
                -09h00 {'\n'}
                -10h00 {'\n'}
                -11h00 {'\n'}
                -11h45 {'\n'}
                -12h30 {'\n'}
                -13h15 {'\n'}
                -14h00 {'\n'}
                -15h00 {'\n'}
                -16h00 {'\n'}
                -17h00 {'\n'}
                -18h00 {'\n'}
                -19h00 {'\n'}
                {'\n'}
                Contato {'\n'}
                E-mail: prefeitura@sobral.ufc.br {'\n'} 
                Fone: (88) 3695-4602.
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

