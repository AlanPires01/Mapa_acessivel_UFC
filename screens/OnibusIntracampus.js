import React from 'react';
import {View, Text,Button, ScrollView, useColorScheme} from 'react-native';
import { Paragraph,Title,Divider } from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function OnibusIntracampus({ navigation }) {
  const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
  return (
    <ScrollView style={theme.container}>
      <Text style={theme.titulo}>Ônibus Intracampus</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <Text style={theme.texto}>
               <Paragraph style={theme.linksText}>          O Campus de Sobral oferece serviço de transporte gratuito aos membros da comunidade acadêmica através do “Ônibus Intracampus”.
               O ônibus intracampus funciona durante os dias letivos percorrendo trajeto que interliga os vários prédios nos quais há atividades da UFC. {'\n'}
               </Paragraph>
               {'\n'}
                <Title style={theme.linksText}>Horario de funcionamento</Title> {'\n'}
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
                <Title style={theme.linksText}>Contato</Title> {'\n'}
                E-mail: prefeitura@sobral.ufc.br {'\n'} 
                Fone: (88) 3695-4602.
      </Text>  
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
       <View style={theme.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

