import React, {useState} from 'react';
import {View, Text,Button, ScrollView, TouchableOpacity, useColorScheme} from 'react-native';
import A from 'react-native-a';
import { Icon } from 'react-native-elements';
import { Paragraph,Title,Divider } from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function AssistenciaEstudantil({ navigation }) {
  const [showMoradia, setMoradia] = useState(false);
  const [showBia, setBia] = useState(false);
  const [showEmergencial, setEmergencial] = useState(false);
  const [showServSocial, setServSocial] = useState(false);
  const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
  return (
    <ScrollView style={theme.container}>
      <Text style={theme.titulo}>Assistência Estudantil</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <Text style={theme.texto}>
        <Paragraph style={theme.linksText}>         As ações de assistência estudantil são promovidas através da Pró-Reitoria de Assuntos Estudantis (PRAE) da UFC e buscam:  {'\n'}
          - Promover a igualdade de oportunidades  {'\n'}
          - Contribuir para a melhoria do desempenho acadêmico  {'\n'}
          - Agir, preventivamente, nas situações de repetência e evasão decorrentes da insuficiência de condições
          financeiras. (PNAES, 2010)  {'\n'}
        </Paragraph>
           {'\n'}
        <Paragraph style={theme.linksText}>          Atualmente, no campus de Sobral há a concessão de auxílios nas seguintes modalidades:</Paragraph>
      </Text>  
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setMoradia(!showMoradia)} accessibilityState={{checked:showMoradia}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='house-user' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Auxilio Moradia</Text>
       </View>
      </TouchableOpacity>
      {
      showMoradia ? (
      <Text style={theme.texto}>
         <Paragraph style={theme.linksText}>          O Programa Auxílio Moradia tem por objetivo viabilizar a permanência de estudantes matriculados nos Cursos de Graduação dos Campi da Universidade Federal do Ceará (UFC) em Sobral, Cariri e Quixadá, 
         em comprovada situação de vulnerabilidade econômica assegurando-lhes auxílio institucional para complementação de despesas com moradia e alimentação durante todo o período do curso ou enquanto persistir a mesma situação.</Paragraph>
         {'\n'}
         <Paragraph style={theme.linksText}>          Importante! A vinculação dos estudantes ao Programa Auxílio Moradia não os impede de receber, por mérito, qualquer uma das bolsas dos diversos programas da UFC, de agências de fomento ou de empresas.</Paragraph>
      </Text>
      ) : null

    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setBia(!showBia)} accessibilityState={{checked:showBia}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='microscope' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Bolsa de Iniciação Acadêmica</Text>
       </View>
      </TouchableOpacity>
      {
      showBia ? (
      <Text style={theme.texto}>
         <Paragraph style={theme.linksText}>          O Programa Bolsa de Iniciação Acadêmica tem por objetivo propiciar aos estudantes de Cursos de Graduação Presenciais da Universidade Federal do Ceará (UFC) – em situação de vulnerabilidade socioeconômica comprovada – 
         especialmente os de semestres iniciais, condições financeiras para sua permanência e desempenho acadêmico satisfatório, mediante atuação, em caráter de iniciação acadêmica, nas diversas unidades da Instituição.
         </Paragraph>
      </Text>
      ) : null
    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setEmergencial(!showEmergencial)} accessibilityState={{checked:showEmergencial}}>
       <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='hand-holding-usd' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Auxílio Emergencial</Text>
       </View>
      </TouchableOpacity>
      {
      showEmergencial ? (
      <Text style={theme.texto}>
          <Paragraph style={theme.linksText}>         O auxílio emergencial tem como objetivo disponibilizar ajuda financeira, em caráter de eventualidade, a estudantes de graduação, em situação de vulnerabilidade socioeconômica comprovada
          e que não tenham sido alcançados por nenhuma das outras ações de apoio financeiro disponíveis na Universidade Federal do Ceará ou pagas com recursos do Governo Federal, 
          de modo que possa contribuir para a obtenção de um desempenho acadêmico satisfatório, reduzir o risco de evasão e propiciar a conclusão dos cursos em tempo hábil.
          </Paragraph>
  </Text>
      ) : null
    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}} />
      <TouchableOpacity onPress={() => setServSocial(!showServSocial)} accessibilityState={{checked:showServSocial}}>
       <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start' }}>
         <Icon style={theme.icon} name='users' type='font-awesome-5'/>
         <Text style={theme.subtitulo}>Serviço Social do Campus de Sobral</Text>
       </View>
      </TouchableOpacity>
      {
      showServSocial ? (
      <Text style={theme.texto}>
        <Paragraph style={theme.linksText}>         O Setor de Serviço Social do Campus de Sobral da Universidade Federal do Ceará (UFC) volta-se para o atendimento das demandas dos discentes, 
        com base na Política Nacional de Assistência Estudantil (PNAES, Decreto nº. 7.234/2010).
        </Paragraph>
        {'\n'}
        <Paragraph style={theme.linksText}>         Além do trabalho direto com os auxílios oferecidos pela PRAE, o Serviço Social realiza orientações aos alunos do campus e encaminhamentos para a rede socioassistencial do município de Sobral e adjacências. 
        Realiza ainda ações educativas relativas às mais variadas expressões da questão social, tais como violência, preconceito, vulnerabilidade socioeconômica, dentre outros.  {'\n'}
        </Paragraph>
         {'\n'}
         O Serviço Social está funcionando no primeiro andar do Bloco do Curso de Odontologia, de 08 ás 12h e de 13 ás 17 horas, de segunda a sexta.
          {'\n'} {'\n'}
        <Title style={theme.linksText}>Contato</Title>  {'\n'}
        Site: <A>www.prae.ufc.br</A>  {'\n'}
        E-mail: case@sobral.ufc.br
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
