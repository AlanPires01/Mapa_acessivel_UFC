import React from 'react';
import {TouchableOpacity, Text,View, FlatList, useColorScheme} from 'react-native';
import { Icon } from 'react-native-elements';
import {dark} from '../assets/css/dark';
import {light} from '../assets/css/light';

const dados = [
  {
    title: 'Cursos de Graduação',
    iconName: 'graduation-cap',
    screenName: 'cursos',
    id: '0',
  },
  {
    title: 'Cursos de Pós-Graduação',
    iconName: 'graduation-cap',
    screenName: 'cursospos',
    id: '1',
  },
  {
    title: 'Bibliotecas',
    iconName: 'book',
    screenName: 'biblioteca',
    id: '2',
  },
  {
    title: 'Refeitório Universitário',
    iconName: 'coffee',
    screenName: 'RU',
    id: '3',
  },
  {
    title: 'Serviço de Psicologia Aplicada',
    iconName: 'heart',
    screenName: 'psicologia',
    id: '4',
  },
  {
    title: 'Ônibus Intracampus',
    iconName: 'bus',
    screenName: 'onibus',
    id: '5',
  },
  {
    title: 'Assistência Estudantil',
    iconName: 'group',
    screenName: 'assistencia',
    id: '6',
  },
];

const Infos = ({ navigation }) => {
  const deviceTheme = useColorScheme();
  var theme = light;
  if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
  const render = ({ item }) => {
    return (
      <TouchableOpacity
        style={theme.linksButtons}
        onPress={() => navigation.navigate(item.screenName)}>
        <Icon color="white" name={item.iconName} type="font-awesome" />
        <Text style={{color: 'white'}}>{item.title.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  };
  return (
      <View style={theme.linksContainer}>
        <FlatList style={theme.linksList} data={dados} renderItem={render} />
      </View>
  );
};

export default Infos;
