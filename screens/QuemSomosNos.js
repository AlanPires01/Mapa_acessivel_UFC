import React, {useState} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { Icon } from 'react-native-elements';
import {css} from '../assets/css/css';
import {Paragraph,Title,Divider} from 'react-native-paper';


export default function QuemSomosNos({ navigation }) {
  const [showTAE, setTAE] = useState(false);
  const [showDev, setDev] = useState(false);


  return (
    <ScrollView style={css.container}>
      <Text style={css.titulo}>Quem somos ?</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}}/>
      <View accessible={true} accessibilityHint="Pressione para exibir informações sobre os desenvolvedores" accessibilityState={{checked:showDev}} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='dev' type='font-awesome-5'/>
         <Text onPress={() => setDev(!showDev)} style={css.subtitulo}>Desenvolvedores</Text>
      </View>
      { showDev ? (
      <Text style={css.texto}>
          <Title>Orientador</Title>
            {'\n'}
            <Text style={css.texto}>Prof. Carlos Alexandre Rolim Fernandes {'\n'}
            </Text>
          <Title>Desenvolvedor</Title>
            {'\n'}
            <Text style={css.texto}>Antoniel da Silva Soares{'\n'}
                José Alan Torres Pires {'\n'}
                Lincoln Gondin Monteiro Gomes {'\n'}
                Matheus Ferreira dos Santos
            </Text>
      </Text>
      ) : null
    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}}/>
      <View accessible={true} accessibilityHint="Pressione para exibir informações sobre o grupo TAE" accessibilityState={{checked:showTAE}} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={css.icon} name='users' type='font-awesome-5'/>
         <Text onPress={() => setTAE(!showTAE)} style={css.subtitulo}>Grupo TAE</Text>
      </View>
       { showTAE ? (
      <View>
          <Paragraph style={css.texto}>         O Grupo de Tecnologias Assistivas e Educacionais(TAE) da Universidade Federal do Ceará (UFC) é um grupo de pesquisa e extensão do Campus Sobral que possui três grandes eixos de atuação: 
            Tecnologias Assistivas (TA) para pessoas com deficiência (PcD), tecnologias ligadas a educação e tecnologias ligadas a saúde.
         </Paragraph>
         <Paragraph style={css.texto}>          O TAE foi criado em 2016 e atualmente conta com integrantes dos cursos Curso de Engenharia da Computação, Engenharia Elétrica e Mestrado em Engenharia Elétrica e de Computação (PPGEEC), 
             totalizando atualmente 20 membros: 2 professores, 5 alunos de mestrado, e 13 alunos de graduação
          </Paragraph>
      <View style={{flex:1, alignItems:'center'}}>
      <Image
        style={css.taeImage}
        source={require('../assets/tae.jpeg')}
      />
      </View>
      </View>
      ) : null
    }      
    <Divider style={{backgroundColor:'#016EA4', height: 10}}/>

    		
	  </ScrollView>
  );
}

