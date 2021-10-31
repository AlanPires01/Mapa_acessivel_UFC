import React, {useState} from 'react';
import {View, Text,Button, StyleSheet, ScrollView} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';


export default function AssistenciaEstudantil({ navigation }) {
  const [showMoradia, setMoradia] = useState(false);
  const [showBia, setBia] = useState(false);
  const [showEmergencial, setEmergencial] = useState(false);
  const [showServSocial, setServSocial] = useState(false);


  
  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Assistência Estudantil</Text>
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <Text style={css.texto}>
         As ações de assistência estudantil são promovidas através da Pró-Reitoria de Assuntos Estudantis (PRAE) da UFC e buscam:  {'\n'}
          -Promover a igualdade de oportunidades  {'\n'}
          -Contribuir para a melhoria do desempenho acadêmico  {'\n'}
          -Agir, preventivamente, nas situações de repetência e evasão decorrentes da insuficiência de condições
          financeiras. (PNAES, 2010)  {'\n'}

           {'\n'}
          Atualmente, no campus de Sobral há a concessão de auxílios nas seguintes modalidades:
      </Text>  
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='house-user' type='font-awesome-5'/>
         <Text onPress={() => setMoradia(!showMoradia)} style={css.subtitulo}>Auxilio Moradia</Text>
      </View>
      {
      showMoradia ? (
      <Text style={css.texto}>
         O Programa Auxílio Moradia tem por objetivo viabilizar a permanência de estudantes matriculados nos Cursos de Graduação dos Campi da Universidade Federal do Ceará (UFC) em Sobral, Cariri e Quixadá, 
         em comprovada situação de vulnerabilidade econômica assegurando-lhes auxílio institucional para complementação de despesas com moradia e alimentação durante todo o período do curso ou enquanto persistir a mesma situação.
         Importante! A vinculação dos estudantes ao Programa Auxílio Moradia não os impede de receber, por mérito, qualquer uma das bolsas dos diversos programas da UFC, de agências de fomento ou de empresas.
      </Text>
      ) : null

    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='microscope' type='font-awesome-5'/>
         <Text onPress={() => setBia(!showBia)} style={css.subtitulo}>Bolsa de Iniciação Acadêmica</Text>
      </View>
      {
      showBia ? (
      <Text style={css.texto}>
         O Programa Bolsa de Iniciação Acadêmica tem por objetivo propiciar aos estudantes de Cursos de Graduação Presenciais da Universidade Federal do Ceará (UFC) – em situação de vulnerabilidade socioeconômica comprovada – 
         especialmente os de semestres iniciais, condições financeiras para sua permanência e desempenho acadêmico satisfatório, mediante atuação, em caráter de iniciação acadêmica, nas diversas unidades da Instituição.
      </Text>
      ) : null
    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='hand-holding-usd' type='font-awesome-5'/>
         <Text onPress={() => setEmergencial(!showEmergencial)} style={css.subtitulo}>Auxílio Emergencial</Text>
      </View>
      {
      showEmergencial ? (
      <Text style={css.texto}>
         O auxílio emergencial tem como objetivo disponibilizar ajuda financeira, em caráter de eventualidade, a estudantes de graduação, em situação de vulnerabilidade socioeconômica comprovada
          e que não tenham sido alcançados por nenhuma das outras ações de apoio financeiro disponíveis na Universidade Federal do Ceará ou pagas com recursos do Governo Federal, 
          de modo que possa contribuir para a obtenção de um desempenho acadêmico satisfatório, reduzir o risco de evasão e propiciar a conclusão dos cursos em tempo hábil.
  </Text>
      ) : null
    }
      <View style={{backgroundColor:'#016EA4', height: 10}}>
        <Text></Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start' }}>
         <Icon style={css.icon} name='users' type='font-awesome-5'/>
         <Text onPress={() => setServSocial(!showServSocial)} style={css.subtitulo}>Serviço Social do Campus de Sobral</Text>
      </View>
      {
      showServSocial ? (
      <Text style={css.texto}>
        O Setor de Serviço Social do Campus de Sobral da Universidade Federal do Ceará (UFC) volta-se para o atendimento das demandas dos discentes, 
        com base na Política Nacional de Assistência Estudantil (PNAES, Decreto nº. 7.234/2010). Além do trabalho direto com os auxílios oferecidos pela PRAE,
        o Serviço Social realiza orientações aos alunos do campus e encaminhamentos para a rede socioassistencial do município de Sobral e adjacências. 
        Realiza ainda ações educativas relativas às mais variadas expressões da questão social, tais como violência, preconceito, vulnerabilidade socioeconômica, dentre outros.  {'\n'}
         {'\n'}
         O Serviço Social está funcionando no primeiro andar do Bloco do Curso de Odontologia, de 08 ás 12h e de 13 ás 17 horas, de segunda a sexta.
          {'\n'} {'\n'}
        Contato  {'\n'}
        Site: <A>www.prae.ufc.br</A>  {'\n'}
        E-mail: case@sobral.ufc.br
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
