import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Cardapio from "./Cardapio";
import Saldo from "./Saldo";

export default function RU(){
    const [escolha, setEscolha] = React.useState(0);
    const voltar = ()=>{
        setEscolha(0);
    }
    if(escolha === 0){
        return (
            <View style={estilo.RUContainer}>
                <Image 
                    source={require('../../assets/RU.jpg')}
                    style={{width:"100%",height:250}}
                />
                <TouchableOpacity style={estilo.RUButton} onPress={()=>{setEscolha(1)}}>
                    <Text style={estilo.RUButtonText}>VER CARDÁPIO DA SEMANA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.RUButton} onPress={()=>{setEscolha(2)}}>
                    <Text style={estilo.RUButtonText}>CONSULTAR SALDO DO CARTÃO</Text>
                </TouchableOpacity>
            </View>
        );
    }
    else if(escolha === 1){
        return (<Cardapio voltar={voltar}/>)
    }
    else if(escolha === 2){
        return (<Saldo voltar={voltar}/>);
    }
}

const estilo = StyleSheet.create({
    RUButton:{
        backgroundColor:"#404E82",
        padding: 20,
        width:"100%",
        margin:10
    },
    RUButtonText:{
        color:"white",
        textAlign:'center',
        fontWeight:"bold"
    },
    RUContainer:{
        flex:1,
        alignItems:"center",
        margin:10
    }
});
