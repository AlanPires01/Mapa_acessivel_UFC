import React from 'react';
import {View, Text, FlatList, TouchableOpacity, useColorScheme} from 'react-native';
import {VinculosExtract, GetHeaders} from "./Sigaa-utils";
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';
let theme = light;
export default function Vinculos(props){

    const deviceTheme = useColorScheme();
    if(deviceTheme == "dark"){theme = dark;}else {theme = light;}

    function renderFunction({item, index}){
        return (
            <VinculoComponent handler={props.handler} sessionID={props.sessionID} vinculo={item} escolha={index}/>
        );

    }
    return (
        <View style={theme.vinculosContainer}>
            <Text style={theme.vinculosText}>Foi detectado mais de um vínculo ativo com a universidade, selecione o vinculo com o qual deseja trabalhar nesta sessão</Text>
            <Text style={theme.vinculosText}>Vinculos encontrados:</Text>
            <FlatList data={props.data} renderItem={renderFunction}/>
        </View>

    );

}

function VinculoComponent({vinculo, escolha, sessionID, handler}){
    return (
        <TouchableOpacity onPress={async ()=>{
                let url = `https://si3.ufc.br${vinculo.link}`;
                const response2 = await fetch(url, {
                    method: "get",
                    headers: GetHeaders(sessionID) 
                });
                handler(false);
                }}>
            
           <View style={theme.vinculosComponentContainer}>
                <Text style={theme.vinculosComponentText}> Vinculo: {vinculo.vinculo}</Text>
                <Text style={theme.vinculosComponentText}> Identificador: {vinculo.identificador}</Text>
                <Text style={theme.vinculosComponentText}> Ativo: {vinculo.ativo}</Text>
                <Text style={theme.vinculosComponentText}> Infos: {vinculo.infos}</Text>
           </View>
        </TouchableOpacity>
    )
}

