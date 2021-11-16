import React from 'react';
import {View, Text} from 'react-native';
import {css} from '../assets/css/css';
import { Paragraph,Title } from 'react-native-paper';


export default function HomeScreen({ navigation }) {
  return (
    <View style={css.container}>
      <Title style={css.titulo}>Bem-Vindo!</Title>
    		<Paragraph style={css.texto}>         O aplicativo tem como finalidade apresentar um mapa acessível e informações sobre a Universidade Federal do Ceará (UFC) Campus Sobral,
        permitindo tornar o campus mais acessível e visando ampliar a autonomia de
        alunos novatos com ou sem algum tipo de deficiência.       
        </Paragraph>
	</View>
  );
}

