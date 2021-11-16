import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';
import { Paragraph,Title,Divider } from 'react-native-paper';

export default function OnibusIntracampus({ navigation }) {
  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Ônibus Intracampus</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <Text style={css.texto}>
               <Paragraph>          O Campus de Sobral oferece serviço de transporte gratuito aos membros da comunidade acadêmica através do “Ônibus Intracampus”.
               O ônibus intracampus funciona durante os dias letivos percorrendo trajeto que interliga os vários prédios nos quais há atividades da UFC. {'\n'}
               </Paragraph>
               {'\n'}
                <Title>Horario de funcionamento</Title> {'\n'}
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
                <Title>Contato</Title> {'\n'}
                E-mail: prefeitura@sobral.ufc.br {'\n'} 
                Fone: (88) 3695-4602.
      </Text>  
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
       <View style={css.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

