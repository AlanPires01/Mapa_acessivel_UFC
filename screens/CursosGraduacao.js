import React, {useState} from 'react';
import {View, Text,Button, ScrollView, TouchableOpacity, useColorScheme} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {Title,Divider } from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function CursosGraduacao({ navigation }) {

  const deviceTheme = useColorScheme();
  var theme = light;
  if(deviceTheme == "dark"){theme = dark;}else {theme = light;}

  const [showCE, setCE] = useState(false);
  const [showEC, setEC] = useState(false);
  const [showEE, setEE] = useState(false);
  const [showFin, setFin] = useState(false);
  const [showMedicina, setMedicina] = useState(false);
  const [showMusica, setMusica] = useState(false);
  const [showOdonto, setOdonto] = useState(false);
  const [showPsicologia, setPsicologia] = useState(false);

  return (
    <ScrollView style={theme.container}>
      <Text style={theme.titulo}>Cursos de Graduação</Text>  
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setCE(!showCE)} accessibilityState={{checked:showCE}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='search-dollar' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Ciências Econômicas</Text>
        </View>
      </TouchableOpacity>
      {
      showCE ? (
      <Text style={theme.texto}>
          <Title style={theme.linksText}>Coordenação</Title> {'\n'}
          Coordenador(a): Prof.ª Thaísa França Badagnan
          Vice-Coordenador(a): Prof. Felipe de Sousa Bastos
          Secretário(a): Vandi Ferreira Lima Júnior {'\n'}
          {'\n'}
      
          <Title style={theme.linksText}>Contato</Title> {'\n'}
              Unidade: Campus da UFC em Sobral {'\n'}
              Endereço: Rua Coronel Estanislau Frota, 563 – Bloco I – Centro – Campus de Sobral – Mucambinho – CEP 62010-560 – Sobral – CE {'\n'}
              Fone/Fax: (88) 3695 4609 {'\n'}
              E-mail: economia@sobral.ufc.br {'\n'}
              Site: <A>http://www.economia.sobral.ufc.br</A>
      </Text>
      ) : null

    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setEC(!showEC)} accessibilityState={{checked:showEC}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='desktop' type='font-awesome'/>
         <Text style={theme.subtitulo}>Engenharia da Computação</Text>
        </View>
      </TouchableOpacity>
      {
      showEC ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title> {'\n'}
            Coordenador(a): Prof. Erick Aguiar Donato
            Vice-Coordenador(a): Prof. Carlos Elmano de Alencar e Silva {'\n'}
            Secretário(a): Michelle Pontes Fontenele Sousa {'\n'}
              {'\n'}
            <Title style={theme.linksText}>Contato</Title> {'\n'}
            Unidade: Campus da UFC em Sobral {'\n'}
            Endereço: Rua Coronel Esta nislau Frota, 563 – Bloco I – Centro – Campus de Sobral –
            Mucambinho – CEP 62010-560 – Sobral – CE {'\n'}
            Fone: (88) 3695 4608 {'\n'}
            E-mail: ec@sobral.ufc.br {'\n'}
            Site: <A>www.ec.ufc.br</A>
      </Text>
      ) : null
    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setEE(!showEE)} accessibilityState={{checked:showEE}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='cogs' type='font-awesome'/>
         <Text style={theme.subtitulo}>Engenharia Elétrica</Text>
        </View>
      </TouchableOpacity>
      {
      showEE ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>   {'\n'}
              Coordenador(a): Prof. Romulo Nunes de Carvalho Almeida   {'\n'}
              Vice-Coordenador(a): Prof. Juan Carlos Oliveira de Medeiros   {'\n'}
              Secretário(a): João Paulo Carneiro da Po
              {'\n'}  {'\n'}
              <Title style={theme.linksText}>Contato</Title>  {'\n'}
                Unidade: Campus da UFC em Sobral   {'\n'}
                Endereço: Rua Coronel Estanislau Frota, 563 – Centro – Campus de Sobral – Mucambinho –
                CEP 62010-560 – Sobral – CE   {'\n'}
                Fone: (88) 3695 4610   {'\n'}
                E-mail: coord.eletrica@sobral.ufc.br   {'\n'}
                Site: <A>www.engeletrica.sobral.ufc.br</A>
      </Text>
      ) : null
    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}}/>
      <TouchableOpacity onPress={() => setFin(!showFin)} accessibilityState={{checked:showFin}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='coins' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Finanças</Text>
        </View>
      </TouchableOpacity>
      {
      showFin ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>  {'\n'}
              Coordenador(a): Prof.ª Cleycianne de Souza Almeida
              Vice-Coordenador(a): Prof.ª Débora Gaspar Feitosa
              Secretário(a): Nádia Adiodato de Menezes
              {'\n'}  {'\n'}
            <Title style={theme.linksText}>Contato</Title>   {'\n'}
                Unidade: Campus da UFC em Sobral   {'\n'}
                Endereço: Rua Coronel Estanislau Frota, 563 – Centro – Campus de Sobral – Mucambinho –
                CEP 62010-560 – Sobral – CE   {'\n'}
                Fone: (88) 3695 4610   {'\n'}
                E-mail: financas@sobral.ufc.br  {'\n'}
                Site: <A>http://www.financassobral.ufc.br</A>
      </Text>
      ) : null
    }
         <Divider style={{backgroundColor:'#016EA4', height: 10}} />
         <TouchableOpacity onPress={() => setMedicina(!showMedicina)} accessibilityState={{checked:showMedicina}}>
         <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
            <Icon style={theme.icon} name='stethoscope' type='font-awesome'/>
            <Text style={theme.subtitulo}>Medicina</Text>
         </View>
         </TouchableOpacity>
      {
      showMedicina ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>   {'\n'}
             Coordenador(a): Prof. Paulo Roberto Lacerda Leal
              Vice-Coordenador(a): Prof. Alex Sandro de Moura Grangeiro
              Secretários(as): Francisca Keila Gadelha de Lima e Antonio Vanderley Moreira (Internato)
              {'\n'}  {'\n'}
            <Title style={theme.linksText}>Contato</Title>  {'\n'}
                Unidade: Campus da UFC em Sobral   {'\n'}
                Endereço: Rua Coronel Estanislau Frota, 563 – Centro – Campus de Sobral – Mucambinho –
                CEP 62010-560 – Sobral – CE   {'\n'}
                Fone: (88) 3695 4610   {'\n'}
                E-mail: secretaria.medicina@sobral.ufc.br{'\n'}
                Site: <A>www.medsobral.ufc.br</A>
      </Text>
      ) : null
    }
       <Divider style={{backgroundColor:'#016EA4', height: 10}}/>
       <TouchableOpacity onPress={() => setMusica(!showMusica)} accessibilityState={{checked:showMusica}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='music' type='font-awesome'/>
         <Text style={theme.subtitulo}>Música</Text>
        </View>
       </TouchableOpacity>
      {
      showMusica ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>   {'\n'}
              Coordenador(a): Prof. Marcelo Mateus de Oliveira
                Vice-Coordenador(a): Prof. João Emanoel Ancelmo Benvenuto
                Secretário(a): Ubeneí Sousa de Farias
              {'\n'}  {'\n'}
            <Title style={theme.linksText}>Contato</Title>   {'\n'}
                Unidade: Campus da UFC em Sobral   {'\n'}
                Endereço: Rua Coronel Estanislau Frota, 563 – Centro – Campus de Sobral – Mucambinho –
                CEP 62010-560 – Sobral – CE   {'\n'}
                Fone: (88) 3695 4610   {'\n'}
                E-mail: musicasobral@gmail.com  {'\n'}
                Site: <A>www.musicasobral.ufc.br</A>
      </Text>
      ) : null
    }
       <Divider style={{backgroundColor:'#016EA4', height: 10}} />
       <TouchableOpacity onPress={() => setOdonto(!showOdonto)} accessibilityState={{checked:showOdonto}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='tooth' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Odontologia</Text>
        </View>
       </TouchableOpacity>
      {
      showOdonto ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>  {'\n'}
              Coordenador(a): Profª. Adriana Kelly de Sousa Santiago Barbosa {'\n'}
                Vice-Coordenador(a): Profª. Iracema Matos de Melo
                Secretário(a): Daniele Sousa Bessa / Ana Priscila de Araújo Machado
              {'\n'}  {'\n'}
            <Title style={theme.linksText}>Contato</Title>   {'\n'}
                Unidade: Campus da UFC em Sobral   {'\n'}
                Endereço: Rua Coronel Estanislau Frota, 563 – Centro – Campus de Sobral – Mucambinho –
                CEP 62010-560 – Sobral – CE   {'\n'}
                Fone: (88) 3695 4610   {'\n'}
                E-mail: odontologia@sobral.ufc.br  {'\n'}
                Site: <A>www.odontologiasobral.ufc.br</A>
      </Text>
      ) : null
    }
       <Divider style={{backgroundColor:'#016EA4', height: 10}} />
       <TouchableOpacity onPress={() => setPsicologia(!showPsicologia)} accessibilityState={{checked:showPsicologia}}>
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='brain' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Psicologia</Text>
        </View>
       </TouchableOpacity>
      {
      showPsicologia ? (
      <Text style={theme.texto}>
            <Title style={theme.linksText}>Coordenação</Title>   {'\n'}
            Coordenador(a): Prof. Iratan Bezerra de Saboia {'\n'}
              Vice-Coordenador(a): Profª. Clarissa de Pontes Vieira Nogueira {'\n'}
              Secretário(a): Antônio Jefferson Cavalcante Araújo
              {'\n'}  {'\n'}
            <Title style={theme.linksText}>Contato</Title>   {'\n'}
                Unidade: Campus da UFC em Sobral   {'\n'}
                Endereço: Rua Coronel Estanislau Frota, 563 – Centro – Campus de Sobral – Mucambinho –
                CEP 62010-560 – Sobral – CE   {'\n'}
                Fone: (88) 3695 4610   {'\n'}
                E-mail: coordpsicologia@sobral.ufc.br {'\n'}
                Site: <A>http://www.financassobral.ufc.br</A>
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

