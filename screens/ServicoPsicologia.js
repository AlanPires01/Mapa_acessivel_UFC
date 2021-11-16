import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';
import { Paragraph,Title,Divider } from 'react-native-paper';


export default function ServicoPsicologia({ navigation }) {
  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Serviço de Psicologia Aplicada</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <Text style={css.texto}>
              <Paragraph>         O Serviço de Psicologia Aplicada Raimundo Medeiros Frota, da Universidade Federal do Ceará está vinculado ao Curso de Psicologia da UFC, Campus Sobral. 
              Este espaço foi inaugurado oficialmente no dia 13 de abril de 2012 e foi considerado um grande passo que confirma a política de interiorização das universidades. </Paragraph>{'\n'}
              <Paragraph>         Atualmente atende as comunidades de Sobral e de localidades vizinhas e apresenta crescente aumento no número de usuários que procuram o serviço tanto por demanda espontânea como por encaminhamentos de outros locais da rede de saúde e atenção social. {'\n'}
              </Paragraph>
              {'\n'}
              <Title>Atividades realizadas</Title> {'\n'}
              - Acolhimento {'\n'}
              - Avaliação inicial/Triagem {'\n'}
              - Psicoterapia individual/grupal {'\n'}
              - Psicodiagnóstico {'\n'}
              {'\n'}
              <Title>Endereço</Title>{'\n'} Av. Lúcia Sabóia, nº. 517 CEP 62.010-830, Centro, Sobral, Ceará {'\n'}
              {'\n'}
              <Title>Horário de funcionamento</Title>{'\n'}
              Atendimento: Dias úteis {'\n'}
              Horário de funcionamento: {'\n'}
              08h às 12 horas {'\n'}
              14h às 18 horas {'\n'}
              {'\n'}
              <Title>Contato</Title> {'\n'}
              Fone: (88) 3695-4633 {'\n'}
              E-mail: spa@sobral.ufc.br
      </Text>  
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />   
       <View style={css.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

