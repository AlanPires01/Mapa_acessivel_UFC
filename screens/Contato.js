import React from 'react';
import {View, Text, ScrollView, Button, TouchableOpacity, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {textos} from '../textos';
import Infos from './Infos'


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

//telas de contatos
const CursosGraduacao = ({navigation}) => {
  return (
    <View style={estilo.container}>
      <ScrollView style={{margin:10,}}>
        <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"></Button>
        <Text style={estilo.titulo}>Cursos de Graduação</Text>
        <Text style={estilo.content}>{textos[0]}</Text>   
      </ScrollView>
    </View>
  );
}

const CursosPosGraduacao = ({navigation}) => {
  return (
    <View style={estilo.container}>
      <ScrollView style={{margin:10,}}>
        <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"></Button>
        <Text style={estilo.titulo}>Cursos de Pós Graduação</Text>
        <Text style={estilo.content}>{textos[1]}</Text>   
      </ScrollView>
    </View>
  );
}
const Bibliotecas = ({navigation}) => {
  return (
    <View style={estilo.container}>
      <ScrollView style={{margin:10,}}>
        <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"></Button>
        <Text style={estilo.titulo}>Bibliotecas</Text>
        <Text style={estilo.content}>{textos[2]}</Text>   
      </ScrollView>
    </View>
  );
}

const RefeitorioUniversitario = ({navigation}) => {
  return (
    <View style={estilo.container}>
      <ScrollView style={{margin:10,}}>
        <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"></Button>
        <Text style={estilo.titulo}>Refeitório Universitário</Text>
        <Text style={estilo.content}>{textos[3]}</Text>   
      </ScrollView>
    </View>
  );
}

const ServicoPsicologia = ({navigation}) => {
  return (
    <View style={estilo.container}>
      <ScrollView style={{margin:10,}}>
        <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"></Button>
        <Text style={estilo.titulo}>Serviço de Psicologia</Text>
        <Text style={estilo.content}>{textos[4]}</Text>   
      </ScrollView>
    </View>
  );
}

const OnibusIntracampus = ({navigation}) => {
  return (
    <View style={estilo.container}>
      <ScrollView style={{margin:10,}}>
        <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"></Button>
        <Text style={estilo.titulo}>Ônibus Intracampus</Text>
        <Text style={estilo.content}>{textos[5]}</Text>   
      </ScrollView>
    </View>
  );
}

const AssistenciaEstudantil = ({navigation}) => {
  return (
    <View style={estilo.container}>
      <ScrollView style={{margin:10,}}>
        <Button onPress={()=>navigation.navigate('Links Uteis')} title="Voltar"></Button>
        <Text style={estilo.titulo}>Assistência Estudantil</Text>
        <Text style={estilo.content}>{textos[6]}</Text>   
      </ScrollView>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#89896f",
  },
  titulo:{
    color:'white',
    fontSize:25,
  },
  content:{
    color:'white'
  }
});

export default Contato;