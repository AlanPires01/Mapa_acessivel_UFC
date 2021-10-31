import React from 'react';
import {View, Text, ScrollView, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {textos} from '../textos';
import Infos from './Infos';
import CursosGraduacao from './CursosGraduacao';
import CursosPosGraduacao from './CursosPosGraduacao';
import Bibliotecas from './Bibliotecas';
import RefeitorioUniversitario from './RefeitorioUniversitario';
import ServicoPsicologia from './ServicoPsicologia';
import OnibusIntracampus from './OnibusIntracampus';
import AssistenciaEstudantil from './AssistenciaEstudantil';

const Stack = createNativeStackNavigator();
const Contato = ({navigation}) => {
  return (  
  <Stack.Navigator initialRouteName="Links Uteis" screenOptions={{headerShown: false}}>
    <Stack.Screen name="Links Uteis" component={Infos}/>
    <Stack.Screen name="cursos" component={CursosGraduacao}/>
    <Stack.Screen name="cursospos" component={CursosPosGraduacao}/>
    <Stack.Screen name="biblioteca" component={Bibliotecas}/>
    <Stack.Screen name="RU" component={RefeitorioUniversitario}/>
    <Stack.Screen name="psicologia" component={ServicoPsicologia}/>
    <Stack.Screen name="onibus" component={OnibusIntracampus}/>
    <Stack.Screen name="assistencia" component={AssistenciaEstudantil}/>
  </Stack.Navigator>
  );
}

export default Contato;
