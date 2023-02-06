import React, {useState} from 'react';
import {View, Text, Image, ScrollView, useColorScheme} from 'react-native';
import { Icon } from 'react-native-elements';
import {Paragraph,Title,Divider} from 'react-native-paper';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

export default function QuemSomosNos() {
  const [showTAE, setTAE] = useState(false);
  const [showDev, setDev] = useState(false);
  const deviceTheme = useColorScheme(); var theme = light; var foto = true; if(deviceTheme == "dark"){theme = dark; foto = false;}else {theme = light; foto = true;}
  var icon = foto ? require('../assets/tae.jpeg') : require('../assets/tae.png');

  return (
    <ScrollView style={theme.container}>
      <Text style={theme.titulo}>{'\n'}Quem somos? {'\n'}</Text>
      <Divider style={{backgroundColor:'#016EA4', height: 10}}/>
      <View accessible={true} accessibilityHint="Pressione para exibir informações sobre os desenvolvedores" accessibilityState={{checked:showDev}} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='dev' type='font-awesome-5'/>
         <Text onPress={() => setDev(!showDev)} style={theme.subtitulo}>Desenvolvedores</Text>
      </View>
      { showDev ? (
      <Text style={theme.texto}>
          <Title style={theme.linksText}>Orientador</Title>
            {'\n'}
            <Text style={theme.texto}>Prof. Carlos Alexandre Rolim Fernandes {'\n'}
            </Text>
          <Title style={theme.linksText}>Desenvolvedor</Title>
            {'\n'}
            <Text style={theme.texto}>Antoniel da Silva Soares{'\n'}
                José Alan Torres Pires {'\n'}
                Lincoln Gondin Monteiro Gomes {'\n'}
                Marco Aurélio Gonçalves Ximenes{'\n'}
                Matheus Ferreira dos Santos
            </Text>
      </Text>
      ) : null
    }
      <Divider style={{backgroundColor:'#016EA4', height: 10}}/>
      <View accessible={true} accessibilityHint="Pressione para exibir informações sobre o grupo TAE" accessibilityState={{checked:showTAE}} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', margin: 2 }}>
         <Icon style={theme.icon} name='users' type='font-awesome-5'/>
         <Text onPress={() => setTAE(!showTAE)} style={theme.subtitulo}>Grupo TAE</Text>
      </View>
       { showTAE ? (
      <View>
          <Paragraph style={theme.texto}>         O Grupo de Tecnologias Assistivas e Educacionais(TAE) da Universidade Federal do Ceará (UFC) é um grupo de pesquisa e extensão do Campus Sobral que possui três grandes eixos de atuação: 
            Tecnologias Assistivas (TA) para pessoas com deficiência (PcD), tecnologias ligadas a educação e tecnologias ligadas a saúde.
         </Paragraph>
         <Paragraph style={theme.texto}>          O TAE foi criado em 2016 e atualmente conta com integrantes dos cursos Curso de Engenharia da Computação, Engenharia Elétrica e Mestrado em Engenharia Elétrica e de Computação (PPGEEC), 
             totalizando atualmente 20 membros: 2 professores, 5 alunos de mestrado, e 13 alunos de graduação
          </Paragraph>
      <View style={{flex:1, alignItems:'center'}}>
      <Image
        style={theme.taeImage}
        source={icon}
      />
      </View>
      </View>
      ) : null
    }      
    <Divider style={{backgroundColor:'#016EA4', height: 10}}/>
	  </ScrollView>
  );
}

