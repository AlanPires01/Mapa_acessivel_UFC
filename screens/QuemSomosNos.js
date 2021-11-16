import React from 'react';
import {View, Text, Image} from 'react-native';
import {css} from '../assets/css/css';
import {Paragraph,Title,Divider} from 'react-native-paper';


export default function QuemSomosNos({ navigation }) {
  return (
    <View style={css.container}>
      <Text style={css.titulo}>Quem somos ?</Text>
    		<Paragraph style={css.texto}>         O Grupo de Tecnologias Assisistivas e Educacionais(TAE) da Universidade Federal do Ceará (UFC) é um grupo de pesquisa e extensão do Campus Sobral que possui três grandes eixos de atuação: 
            Tecnologias Assistivas (TA) para pessoas com deficiência (PcD), tecnologias ligadas a educação e tecnologias ligadas a saúde.
         </Paragraph>
         <Paragraph style={css.texto}>          O TAE foi criado em 2016 e atualmente conta com integrantes dos cursos Curso de Engenharia da Computação, Engenharia Elétrica e Mestrado em Engenharia Elétrica e de Computação (PPGEEC), 
             totalizando atualmente 20 membros: 2 professores, 5 alunos de mestrado, e 13 alunos de graduação
          </Paragraph>
      <Image
        style={css.taeImage}
        source={require('../assets/tae1.jpeg')}
      />
	  </View>
  );
}

