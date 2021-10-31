import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';


export default function ServicoPsicologia({ navigation }) {
  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Serviço de Psicologia Aplicada</Text>
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <Text style={css.texto}>
              O Serviço de Psicologia Aplicada Raimundo Medeiros Frota, da Universidade Federal do Ceará está vinculado ao Curso de Psicologia da UFC, Campus Sobral. 
              Este espaço foi inaugurado oficialmente no dia 13 de abril de 2012 e foi considerado um grande passo que confirma a política de interiorização das universidades. {'\n'}
              Atualmente atende as comunidades de Sobral e de localidades vizinhas e apresenta crescente aumento no número de usuários que procuram o serviço tanto por demanda espontânea como por encaminhamentos de outros locais da rede de saúde e atenção social. {'\n'}
              {'\n'}
              Atividades realizadas: {'\n'}
              - Acolhimento {'\n'}
              - Avaliação inicial/Triagem {'\n'}
              - Psicoterapia individual/grupal {'\n'}
              - Psicodiagnóstico {'\n'}
              {'\n'}
              Endereço: Av. Lúcia Sabóia, nº. 517 CEP 62.010-830, Centro, Sobral, Ceará {'\n'}
              {'\n'}
              Atendimento: Dias úteis {'\n'}
              Horário de funcionamento: {'\n'}
              08h às 12 horas {'\n'}
              14h às 18 horas {'\n'}
              {'\n'}
              Contato {'\n'}
              Fone: (88) 3695-4633 {'\n'}
              E-mail: spa@sobral.ufc.br
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

