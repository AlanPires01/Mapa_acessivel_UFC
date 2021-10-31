import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';

export default function CursosPosGraduacao({ navigation }) {
  const [showRMed, setRMed] = useState(false);
  const [showBio, setBio] = useState(false);
  const [showCSaude, setCSaude] = useState(false);
  const [showFSaude, setFSaude] = useState(false);
  const [showEngEC, setEngEC] = useState(false);
  const [showPsicologia, setPsicologia] = useState(false);
  



  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Cursos de Pós-Graduação</Text>  
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='clinic-medical' type='font-awesome-5'/>
         <Text onPress={() => setRMed(!showRMed)} style={css.subtitulo}>Residências Médicas</Text>
      </View>
      {
      showRMed ? (
      <Text style={css.texto}>
      Contato: {'\n'}
              Endereço: Santa Casa de Misericórdia de Sobral  {'\n'}
              Rua Antônio Crisóstomo de Melo, nº. 919  {'\n'}
              CEP 62.010-550 – Centro Sobral, Ceará. {'\n'}
              Fone: (88) 3695-4741 {'\n'}
              E-mail: coreme@stacasa.com.br
      </Text>
      ) : null

    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='dna' type='font-awesome-5'/>
         <Text onPress={() => setBio(!showBio)} style={css.subtitulo}>Mestrado em Biotecnologia</Text>
      </View>
      {
      showBio ? (
      <Text style={css.texto}>
            Coordenação {'\n'}
           Coordenadora: Professora Carla Thiciane Vasconcelos de Melo {'\n'}
            Vice-Coordenador: Professor Alex Soares Marreiros Ferraz {'\n'}
              {'\n'}
            Contato {'\n'}
            Endereço: Avenida Comandante Maurocélio Rocha Pontes, nº. 100 {'\n'}
            CEP 62042-280 – Derby Sobral, Ceará {'\n'}
            Fone: (88) 3695-4720 {'\n'}
            E-mail: biotecnologiasobral@gmail.com {'\n'}
            Site: <A>www.ppgb.ufc.br</A>
      </Text>
      ) : null
    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='hand-holding-medical' type='font-awesome-5'/>
         <Text onPress={() => setCSaude(!showCSaude)} style={css.subtitulo}>Me. em Ciências da Saúde</Text>
      </View>
      {
      showCSaude ? (
      <Text style={css.texto}>
            Coordenação   {'\n'}
              Coordenador: Professor Filipe Nobre Chaves
              {'\n'}  {'\n'}
            Contato   {'\n'}
                Endereço: Avenida Comandante Maurocélio Rocha Pontes, nº. 100 {'\n'}
                CEP 62042-280 – Derby Sobral, Ceará {'\n'}
                Fone: (88) 3695-4722 {'\n'}
                E-mail: ppgcsufcsobral@gmail.com {'\n'}
                Site: <A>http://200.129.42.3/mcs/</A>
      </Text>
      ) : null
    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='heartbeat' type='font-awesome-5'/>
         <Text onPress={() => setFSaude(!showFSaude)} style={css.subtitulo}>Me. em Saúde da família</Text>
      </View>
      {
      showFSaude ? (
      <Text style={css.texto}>
            Coordenação   {'\n'}
             Coordenador: Professor Luiz Odorico Monteiro de Andrade {'\n'}
             Vice-Coordenador: Professor Fernando Daniel de Oliveira Mayorga
              {'\n'}  {'\n'}
            Contato   {'\n'}
                Endereço: Avenida Comandante Maurocélio Rocha Pontes, nº. 100 {'\n'}
                CEP 62042-280 – Derby Sobral, Ceará {'\n'}
                Fone: (88) 3695-4722 {'\n'}
                E-mail: saudedafamiliasobral@gmail.com {'\n'}
                Site: <A>www.saudedafamiliaufc.com.br</A>
      </Text>
      ) : null
    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
         <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='laptop' type='font-awesome'/>
         <Text onPress={() => setEngEC(!showEngEC)} style={css.subtitulo}>Me. em Engenharia Elétrica e Computação</Text>
      </View>
      {
      showEngEC ? (
      <Text style={css.texto}>
            Coordenação   {'\n'}
              Coordenador: Professor Carlos Alexandre Rolim Fernandes {'\n'}
              Vice-Coordenador: Professor Iális Cavalcante de Paula Júnior
              {'\n'}  {'\n'}
            Contato   {'\n'}
               Endereço: Bloco I – Campus de Sobral – Mucambinho Rua Coronel Estanislau Frota, nº. 563  {'\n'}
               CEP 62.010-560 – Centro Sobral, Ceará  {'\n'}
               Fone: (88) 3695-4607  {'\n'}
               E-mail: secretaria_ppgeec@sobral.ufc.br  {'\n'}
               Site: <A>www.ppgeec.ufc.br</A>
      </Text>
      ) : null
    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='brain' type='font-awesome-5'/>
         <Text onPress={() => setPsicologia(!showPsicologia)} style={css.subtitulo}>Mestrado Profissional em Psicologia e Políticas Públicas</Text>
      </View>
      {
      showPsicologia ? (
      <Text style={css.texto}>
            Coordenação   {'\n'}
             Coordenador: Professor Francisco Pablo Huascar Aragão Pinheiro {'\n'}
              Vice-Coordenadora: Professora Maria Suely Alves Costa
              {'\n'}  {'\n'}
            Contato   {'\n'}
               Endereço: Rua Coronel Estanislau Frota, 563  {'\n'} 
               CEP 62.010-560 – Centro Sobral, Ceará  {'\n'}
                Fone 1: (88) 3695-4639  {'\n'}
                Fone 2: (88) 3695-4619  {'\n'}
                E-mail: psi.polpublicas@sobral.ufc.br
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

