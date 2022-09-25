import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView, TouchableOpacity, useColorScheme} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import { Paragraph,Title,Divider } from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function CursosPosGraduacao({ navigation }) {
  const [showRMed, setRMed] = useState(false);
  const [showBio, setBio] = useState(false);
  const [showCSaude, setCSaude] = useState(false);
  const [showFSaude, setFSaude] = useState(false);
  const [showEngEC, setEngEC] = useState(false);
  const [showPsicologia, setPsicologia] = useState(false);
  const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}

  return (
    <ScrollView style={theme.container}>
      <Text style={theme.titulo}>Cursos de Pós-Graduação</Text>  
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setRMed(!showRMed)} accessibilityState={{checked:showRMed}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='clinic-medical' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Residências Médicas</Text>
       </View>
      </TouchableOpacity>
      {
      showRMed ? (
      <Text style={theme.texto}>
      <Title style={theme.linksText}>Contato</Title> {'\n'}
              Endereço: Santa Casa de Misericórdia de Sobral  {'\n'}
              Rua Antônio Crisóstomo de Melo, nº. 919  {'\n'}
              CEP 62.010-550 – Centro Sobral, Ceará. {'\n'}
              Fone: (88) 3695-4741 {'\n'}
              E-mail: coreme@stacasa.com.br
      </Text>
      ) : null

    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setBio(!showBio)} accessibilityState={{checked:showBio}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='dna' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Mestrado em Biotecnologia</Text>
       </View>
      </TouchableOpacity>
      {
      showBio ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>{'\n'}
           Coordenadora: Profª. Carla Thiciane Vasconcelos de Melo {'\n'}
            Vice-Coordenador: Prof. Alex Soares Marreiros Ferraz {'\n'}
              {'\n'}
            <Title style={theme.linksText}>Contato</Title> {'\n'}
            Endereço: Avenida Comandante Maurocélio Rocha Pontes, nº. 100 {'\n'}
            CEP 62042-280 – Derby Sobral, Ceará {'\n'}
            Fone: (88) 3695-4720 {'\n'}
            E-mail: biotecnologiasobral@gmail.com {'\n'}
            Site: <A>www.ppgb.ufc.br</A>
      </Text>
      ) : null
    }
     <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setCSaude(!showCSaude)} accessibilityState={{checked:showCSaude}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='hand-holding-medical' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Me. em Ciências da Saúde</Text>
       </View>
      </TouchableOpacity>
      {
      showCSaude ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>  {'\n'}
              Coordenador: Prof. Filipe Nobre Chaves
              {'\n'}  {'\n'}
            <Title style={theme.linksText}>Contato</Title>   {'\n'}
                Endereço: Avenida Comandante Maurocélio Rocha Pontes, nº. 100 {'\n'}
                CEP 62042-280 – Derby Sobral, Ceará {'\n'}
                Fone: (88) 3695-4722 {'\n'}
                E-mail: ppgcsufcsobral@gmail.com {'\n'}
                Site: <A>http://200.129.42.3/mcs/</A>
      </Text>
      ) : null
    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setFSaude(!showFSaude)} accessibilityState={{checked:showFSaude}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='heartbeat' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Me. em Saúde da família</Text>
       </View>
      </TouchableOpacity>
      {
      showFSaude ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>  {'\n'}
             Coordenador: Prof. Luiz Odorico Monteiro de Andrade {'\n'}
             Vice-Coordenador: Prof. Fernando Daniel de Oliveira Mayorga
              {'\n'}  {'\n'}
            <Title style={theme.linksText}>Contato</Title>  {'\n'}
                Endereço: Avenida Comandante Maurocélio Rocha Pontes, nº. 100 {'\n'}
                CEP 62042-280 – Derby Sobral, Ceará {'\n'}
                Fone: (88) 3695-4722 {'\n'}
                E-mail: saudedafamiliasobral@gmail.com {'\n'}
                Site: <A>www.saudedafamiliaufc.com.br</A>
      </Text>
      ) : null
    }
     <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setEngEC(!showEngEC)} accessibilityState={{checked:showEngEC}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='laptop' type='font-awesome'/>
         <Text style={theme.subtitulo}>Me. em Engenharia Elétrica e Computação</Text>
        </View>
      </TouchableOpacity>
      {
      showEngEC ? (
      <Text style={theme.texto}>
             <Title style={theme.linksText}>Coordenação</Title>   {'\n'}
              Coordenador: Prof. Carlos Alexandre Rolim Fernandes {'\n'}
              Vice-Coordenador: Prof. Iális Cavalcante de Paula Júnior
              {'\n'}  {'\n'}
              <Title style={theme.linksText}>Contato</Title>   {'\n'}
               Endereço: Bloco I – Campus de Sobral – Mucambinho Rua Coronel Estanislau Frota, nº. 563  {'\n'}
               CEP 62.010-560 – Centro Sobral, Ceará  {'\n'}
               Fone: (88) 3695-4607  {'\n'}
               E-mail: secretaria_ppgeec@sobral.ufc.br  {'\n'}
               Site: <A>www.ppgeec.ufc.br</A>
      </Text>
      ) : null
    }
     <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setPsicologia(!showPsicologia)} accessibilityState={{checked:showPsicologia}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='brain' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Mestrado Profissional em Psicologia e Políticas Públicas</Text>
       </View>
      </TouchableOpacity>
      {
      showPsicologia ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>   {'\n'}
             Coordenador: Prof. Francisco Pablo Huascar Aragão Pinheiro {'\n'}
              Vice-Coordenadora: Profª. Maria Suely Alves Costa
              {'\n'}  {'\n'}
            <Title style={theme.linksText}>Contato</Title>   {'\n'}
               Endereço: Rua Coronel Estanislau Frota, 563  {'\n'} 
               CEP 62.010-560 – Centro Sobral, Ceará  {'\n'}
                Fone 1: (88) 3695-4639  {'\n'}
                Fone 2: (88) 3695-4619  {'\n'}
                E-mail: psi.polpublicas@sobral.ufc.br
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

