import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';


export default function Bibliotecas({ navigation }) {
  const [showBiblioteca, setBiblioteca] = useState(false);
  const [showBibliotecaMed, setBibliotecaMed] = useState(false);
  
  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Bibliotecas</Text>
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <Text style={css.texto}>
          As bibliotecas universitária têm o objetivo de organizar, preservar e disseminar a informação para a produção do conhecimento, dando suporte às atividades educacionais, científicas, tecnológicas e 
          culturais da Universidade Federal do Ceará, possibilitando o crescimento e o desenvolvimento da 
          Instituição e da sociedade. {'\n'}
      </Text>  
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='book' type='font-awesome-5'/>
         <Text onPress={() => setBiblioteca(!showBiblioteca)} style={css.subtitulo}>Biblioteca do Campus de Sobral</Text>
      </View>
      {
      showBiblioteca ? (
      <Text style={css.texto}>
          Bibliotecária responsável: Ana Márcia Andrade de Sousa {'\n'}
          {'\n'}
          Site: <A>https://biblioteca.ufc.br</A> {'\n'}
          {'\n'}
          Cursos atendidos: Ciências Econômicas, Engenharia da Computação, Engenharia Elétrica, Finanças, Música, Psicologia. {'\n'}

          Atendimento: Nos dias uteis da s 7h às 21 horas. {'\n'}
          {'\n'}
          Endereço:
          Bloco I – Campus de Sobral – Mucambinho   {'\n'}
          Rua Coronel Estanislau Frota, 563   {'\n'}
          CEP 62.010-560 – Centro, Sobral, Ceará   {'\n'}
          {'\n'}
          Contato: {'\n'}
          E-mail: bcsobral@hotmail.com {'\n'}
          Sala do Acervo da Biblioteca: (88) 3695-4644 {'\n'}
          Gabinete da Bibliotecária: (88) 3695-4645
      </Text>
      ) : null

    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='book-medical' type='font-awesome-5'/>
         <Text onPress={() => setBibliotecaMed(!showBibliotecaMed)} style={css.subtitulo}>Biblioteca do Curso de Medicina</Text>
      </View>
      {
      showBibliotecaMed ? (
      <Text style={css.texto}>
          Bibliotecária responsável: Djeanne Batista Soares {'\n'}
          {'\n'}
          Atendimento: Nos dias úteis das 7h às 21 horas. {'\n'}
          Endereço: Av. Comandante Maurocélio Rocha Pontes, nº. 100 {'\n'} 
          CEP 62.042-280, Derby, Sobral, Ceará. {'\n'}
          {'\n'}
          Contato {'\n'}
          Fone: (88) 3611-8000 {'\n'}
          E-mail: djeanne@ufc.br {'\n'}
          E-mail: djeannecosta@gmail.com {'\n'}
      </Text>
      ) : null
    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
       <View style={css.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

