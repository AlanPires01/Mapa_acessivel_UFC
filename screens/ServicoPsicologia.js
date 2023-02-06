import React from 'react';
import {View, Text,Button, ScrollView, useColorScheme} from 'react-native';
import { Paragraph,Title,Divider } from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function ServicoPsicologia({ navigation }) {
  const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
  return (
    <ScrollView style={theme.container}>
      <Text style={theme.titulo}>Serviço de Psicologia Aplicada</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <Text style={theme.texto}>
              <Paragraph style={theme.linksText}>         O Serviço de Psicologia Aplicada Raimundo Medeiros Frota, da Universidade Federal do Ceará está vinculado ao Curso de Psicologia da UFC, Campus Sobral. 
              Este espaço foi inaugurado oficialmente no dia 13 de abril de 2012 e foi considerado um grande passo que confirma a política de interiorização das universidades. </Paragraph>{'\n'}
              <Paragraph style={theme.linksText}>         Atualmente atende as comunidades de Sobral e de localidades vizinhas e apresenta crescente aumento no número de usuários que procuram o serviço tanto por demanda espontânea como por encaminhamentos de outros locais da rede de saúde e atenção social. {'\n'}
              </Paragraph>
              {'\n'}
              <Title style={theme.linksText}>Atividades realizadas</Title> {'\n'}
              - Acolhimento {'\n'}
              - Avaliação inicial/Triagem {'\n'}
              - Psicoterapia individual/grupal {'\n'}
              - Psicodiagnóstico {'\n'}
              {'\n'}
              <Title style={theme.linksText}>Endereço</Title>{'\n'} Av. Lúcia Sabóia, nº. 517 CEP 62.010-830, Centro, Sobral, Ceará {'\n'}
              {'\n'}
              <Title style={theme.linksText}>Horário de funcionamento</Title>{'\n'}
              Atendimento: Dias úteis {'\n'}
              Horário de funcionamento: {'\n'}
              08h às 12 horas {'\n'}
              14h às 18 horas {'\n'}
              {'\n'}
              <Title style={theme.linksText}>Contato</Title> {'\n'}
              Fone: (88) 3695-4633 {'\n'}
              E-mail: spa@sobral.ufc.br
      </Text>  
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />   
       <View style={theme.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

