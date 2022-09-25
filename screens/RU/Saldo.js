import React from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, useColorScheme } from "react-native";
import { getINFO } from "./RU-utils";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';

export default function Saldo({voltar}){
    const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
    const [numero, setNumero] = React.useState("");
    const [matricula, setMatricula] = React.useState("");
    const [consultando, setConsultando] = React.useState(false);
    const [info, setInfo] = React.useState({});
    const [fetched, setFetched] = React.useState(false);
    const [ultimosValoresDisponiveis, setUltimosValoresDisponives] = React.useState(false);

    React.useEffect(()=>{
        AsyncStorage.getItem("@numeroCartao").then((erro, result)=>{
            if(result !== null){
                setUltimosValoresDisponives(true);
            }
        });
    },[]);

    async function update(){
        AsyncStorage.setItem("@numeroCartao",numero);
        AsyncStorage.setItem("@numeroMatricula",matricula);
        setNumero("");
        setMatricula("");
        setConsultando(true);
        const data = await getINFO(numero, matricula);
        setFetched(true);
        setInfo(data);
    }

    function renderAction({item, index}){
        return (
          <View style={[estilo.actionContainer, index%2==0?estilo.odd:estilo.even]}>
            <Text><Text>{item.dia}</Text> ás <Text>{item.hora}</Text> <Text>{item.acao}</Text></Text>
          </View>
        );
    }

    

    if(!consultando){
        return (
            <View style={{flex:1, padding:10}}>
                <TouchableOpacity style={{
                    paddingVertical:10,
                    marginBottom:10,
                    backgroundColor:"#404E82"
                }} onPress={()=>voltar()}>
                    <Text style={{color:"white", fontWeight:"bold"}}>{" << VOLTAR"}</Text>
                </TouchableOpacity>
                <View>
                    <View style={estilo.saldoInputContainer}>
                        <Text style={estilo.InputText}>Numero do Cartão</Text>
                        <TextInput value={numero} placeholder="Digite aqui" onChangeText={(text)=>{setNumero(text)}} style={theme.saldoInput}/>
                    </View>
                    <View style={estilo.saldoInputContainer}>
                        <Text style={estilo.InputText}>Numero da Matrícula</Text>
                        <TextInput value={matricula} placeholder="Digite aqui" onChangeText={(text)=>{setMatricula(text)}}  style={theme.saldoInput}/>
                    </View>
                    <View style={{alignItems:"center", flexDirection:"column", width:"100%"}}>
                        <TouchableOpacity style={estilo.saldoButton} onPress={()=>{update();}}>
                            <Text style={{textAlign:"center", color:"white"}}>Consultar</Text>
                        </TouchableOpacity>
                        {ultimosValoresDisponiveis && (
                            <TouchableOpacity style={estilo.saldoButton} onPress={()=>{
                                AsyncStorage.getItem("@numeroCartao").then((result)=>{
                                    setNumero(result);
                                });
                                AsyncStorage.getItem("@numeroMatricula").then((result)=>{
                                    setMatricula(result);
                                });
                            }}>
                                <Text style={{textAlign:"center", color:"white"}}>Carregar ultimos valores</Text>
                            </TouchableOpacity>
                        )}
                        
                    </View>
                </View>
            </View>
        );
    }
    else{

        if(!fetched){
            return (
                <View style={{flex:1, justifyContent:"center"}}>
                    <Text style={{textAlign:"center", fontWeight:"bold", fontSize:20}}>Carregando...</Text>
                </View>
            );
        }
        else{
            return (
                <View style={{flex:1, padding:10}}>
                    <TouchableOpacity style={{
                        paddingVertical:10,
                        marginBottom:10,
                        backgroundColor:"#404E82"
                    }} onPress={()=>{
                        setConsultando(false);
                        setInfo({});
                        setFetched(false);
                    }}>
                        <Text style={{color:"white", fontWeight:"bold"}}>{" << Fazer nova consulta"}</Text>
                    </TouchableOpacity>
                    <View style={{backgroundColor:"#404E82", padding:10}}>
                        <Text style={{color:"white", alignSelf:"center"}}>Refeições disponíveis</Text>
                    </View>
                        
                    <View style={[theme.actionContainer]}>
                        <Text style={[{color:"black"}, theme.odd]}>NOME : {info.nome}</Text>
                        <Text style={[{color:"black"}, theme.even]}>CRÉDITOS : {info.creditos}</Text>
                    </View>
    
                    <View style={{backgroundColor:"#404E82", padding:10}}>
                        <Text style={{color:"white", alignSelf:"center"}}>Operações realizadas</Text>
                    </View>
                    <FlatList renderItem={renderAction} data={info.acoes}/>
                </View>
            );
        }
        
    }

    
}

const estilo = StyleSheet.create({
    saldoInputContainer:{
        marginBottom:10
    },
    saldoButton:{
        width:"70%",
        backgroundColor:"#404E82",
        padding:10,
        marginVertical:5
    },
    InputText:{
        backgroundColor:"#404E82",
        padding:10,
        textAlign:"center",
        color:"white",
        fontWeight:"bold"
    },
});