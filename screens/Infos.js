import React from 'react';
import {
  TouchableOpacity,
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Icon } from 'react-native-elements';

const dados = [
  {
    title: 'Cursos de Graduação',
    iconName: 'graduation-cap',
    screenName: 'cursos',
    id: 0,
  },
  {
    title: 'Cursos de Pós Graduação',
    iconName: 'graduation-cap',
    screenName: 'cursospos',
    id: 1,
  },
  {
    title: 'Bibliotecas',
    iconName: 'book',
    screenName: 'biblioteca',
    id: 2,
  },
  {
    title: 'Refeitório Universitário',
    iconName: 'coffee',
    screenName: 'RU',
    id: 3,
  },
  {
    title: 'Serviço de Psicologia Aplicada',
    iconName: 'heart',
    screenName: 'psicologia',
    id: 4,
  },
  {
    title: 'Ônibus Intracampus',
    iconName: 'bus',
    screenName: 'onibus',
    id: 5,
  },
  {
    title: 'Assistência Estudantil',
    iconName: 'group',
    screenName: 'assistencia',
    id: 6,
  },
];

const Infos = ({ navigation }) => {
  const render = ({ item }) => {
    return (
      <TouchableOpacity
        style={estilo.linksButtons}
        onPress={() => navigation.navigate(item.screenName)}>
        <Icon color="white" name={item.iconName} type="font-awesome" />
        <Text style={estilo.linksText}>{item.title.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };
  return (
      <View style={estilo.linksContainer}>
        <FlatList style={estilo.linksList} data={dados} renderItem={render} />
      </View>
  );
};

const estilo = StyleSheet.create({
  linksContainer: {
    flex: 1,
    alignItems: 'center',
  },
  linksList: {
    width: '95%',
  },
  linksButtons: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 90,
    borderRadius: 5,
    margin: 5,
  },
  linksText: {
    color: 'white',
  },
});

export default Infos;
