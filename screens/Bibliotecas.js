import React, {useState} from 'react';
import {View, Text,Button, ScrollView, TouchableOpacity, useColorScheme} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import { Paragraph,Title,Divider } from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function Bibliotecas({ navigation }) {
  const [showBiblioteca, setBiblioteca] = useState(false);
  const [showBibliotecaMed, setBibliotecaMed] = useState(false);
  const deviceTheme = useColorScheme();
  var theme = light;
  if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
  return (
    <ScrollView style={theme.container}>
      <Text style={theme.titulo}>Bibliotecas</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <Paragraph style={theme.texto}>         As bibliotecas universitárias têm o objetivo de organizar, preservar e disseminar a informação para a produção do conhecimento, dando suporte às atividades educacionais, científicas, tecnológicas e 
          culturais da Universidade Federal do Ceará, possibilitando o crescimento e o desenvolvimento da 
          Instituição e da sociedade. {'\n'}
      </Paragraph>  
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setBiblioteca(!showBiblioteca)} accessibilityState={{checked:showBiblioteca}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='book' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Biblioteca do Campus de Sobral</Text>
       </View>
      </TouchableOpacity>
      {
      showBiblioteca ? (
      <Text style={theme.texto}>
          <Title style={theme.linksText}>Bibliotecária responsável</Title>{'\n'} Ana Márcia Andrade de Sousa {'\n'}
          {'\n'}
          <Title style={theme.linksText}>Site</Title>{'\n'} <A>https://biblioteca.ufc.br</A> {'\n'}
          {'\n'}
          <Title style={theme.linksText}>Cursos atendidos</Title>{'\n'} Ciências Econômicas, Engenharia da Computação, Engenharia Elétrica, Finanças, Música, Psicologia. {'\n'}

          <Title style={theme.linksText}>Atendimento</Title>{'\n'} Nos dias uteis da s 7h às 21 horas. {'\n'}
          {'\n'}
          <Title style={theme.linksText}>Endereço</Title>{'\n'}
           Bloco I – Campus de Sobral – Mucambinho   {'\n'}
          Rua Coronel Estanislau Frota, 563   {'\n'}
          CEP 62.010-560 – Centro, Sobral, Ceará   {'\n'}
          {'\n'}
          <Title style={theme.linksText}>Contato</Title> {'\n'}
          E-mail: bcsobral@hotmail.com {'\n'}
          Sala do Acervo da Biblioteca: (88) 3695-4644 {'\n'}
          Gabinete da Bibliotecária: (88) 3695-4645
      </Text>
      ) : null

    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setBibliotecaMed(!showBibliotecaMed)} accessibilityState={{checked:showBibliotecaMed}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='book-medical' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Biblioteca do Curso de Medicina</Text>
       </View>
      </TouchableOpacity>
      {
      showBibliotecaMed ? (
      <Text style={theme.texto}>
          <Title style={theme.linksText}>Bibliotecária responsável</Title>{'\n'} Djeanne Batista Soares {'\n'}
          {'\n'}
          <Title style={theme.linksText}>Atendimento</Title>{'\n'} Nos dias úteis das 7h às 21 horas. {'\n'}
          <Title style={theme.linksText}>Endereço</Title>{'\n'} Av. Comandante Maurocélio Rocha Pontes, nº. 100 {'\n'} 
          CEP 62.042-280, Derby, Sobral, Ceará. {'\n'}
          {'\n'}
          <Title style={theme.linksText}>Contato</Title> {'\n'}
          Fone: (88) 3611-8000 {'\n'}
          E-mail: djeanne@ufc.br {'\n'}
          E-mail: djeannecosta@gmail.com {'\n'}
      </Text>
      ) : null
    }
     <Divider style={{backgroundColor:'#016EA4', height: 10}} />
       <View style={theme.botao}>
          <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"/>
      </View>
	</ScrollView>
  );
}

