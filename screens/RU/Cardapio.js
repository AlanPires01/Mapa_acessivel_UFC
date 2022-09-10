import React from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { obterCardapio, extrairCardapio } from "./RU-utils";

function Option({title, content}){

    return (
        <View style={estilo.option}>
            <Text style={estilo.optionTitle}>{title}</Text>
            <Text style={estilo.optionContent}>{content}</Text>
        </View>
    );
}

export default function Cardapio({voltar}){
    const [cardapio, setCardapio] = React.useState({});
    const [dia, setDia] = React.useState(0);
    const [fetched, setFetched] = React.useState(false);
    const [componentMounted, setComponentMounted] = React.useState(true);

    React.useEffect(()=>{
        async function getData(){
            const html = await obterCardapio();
            console.log("Cardapio obtido!");
            const json = extrairCardapio(html);
            console.log("Cardapio Extraido!");
            if(componentMounted){
                console.log("Informacao baixada");
                setCardapio(json);
                setFetched(true);
            }
        }
        getData();
        return ()=>{
            setComponentMounted(false);
        };
    }, []);
    return (
        <View style={{flex:1, padding:10}}>
            <TouchableOpacity style={{
                    paddingVertical:10,
                    marginBottom:10,
                    backgroundColor:"#404E82"
                }} onPress={()=>voltar()}>
                <Text style={{color:"white", fontWeight:"bold"}}>{" << VOLTAR"}</Text>
            </TouchableOpacity>
            <View style={{flexDirection:"row", height:"90%"}}>
                <View>
                    <TouchableOpacity onPress={()=>{setDia(0)}} style={[estilo.diaButton, dia===0?estilo.diaButtonSelected:null]}><Text style={estilo.diaText}>SEGUNDA</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setDia(1)}} style={[estilo.diaButton, dia===1?estilo.diaButtonSelected:null]}><Text style={estilo.diaText}>TERÇA</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setDia(2)}} style={[estilo.diaButton, dia===2?estilo.diaButtonSelected:null]}><Text style={estilo.diaText}>QUARTA</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setDia(3)}} style={[estilo.diaButton, dia===3?estilo.diaButtonSelected:null]}><Text style={estilo.diaText}>QUINTA</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>{setDia(4)}} style={[estilo.diaButton, dia===4?estilo.diaButtonSelected:null]}><Text style={estilo.diaText}>SEXTA</Text></TouchableOpacity>
                </View>
                {(fetched) ? (
                    <ScrollView style={{ paddingHorizontal:10}}>
                        <View>
                            <Text style={estilo.refeicaoTipoText}>ALMOÇO</Text>
                            <Option title="OPÇÃO 1" content={cardapio.almoco.opcao1[dia]}/>
                            <Option title="OPÇÃO 2" content={cardapio.almoco.opcao2[dia]}/>
                            <Option title="VEGETARIANO" content={cardapio.almoco.vegetariano[dia]}/>
                            <Option title="SALADA" content={cardapio.almoco.salada[dia]}/>
                            <Option title="GUARNIÇÃO" content={cardapio.almoco.guarnicao[dia]}/>
                            <Option title="ACOMPANHAMENTOS" content={cardapio.almoco.acompanhamentos[dia]}/>
                            <Option title="SOBREMESA" content={cardapio.almoco.sobremesa[dia]}/>
                        </View>
                        <View>
                            <Text style={estilo.refeicaoTipoText}>JANTAR</Text>
                            <Option title="OPÇÃO 1" content={cardapio.janta.opcao1[dia]}/>
                            <Option title="OPÇÃO 2" content={cardapio.janta.opcao2[dia]}/>
                            <Option title="VEGETARIANO" content={cardapio.janta.vegetariano[dia]}/>
                            <Option title="SALADA" content={cardapio.janta.salada[dia]}/>
                            <Option title="GUARNIÇÃO" content={cardapio.janta.guarnicao[dia]}/>
                            <Option title="ACOMPANHAMENTOS" content={cardapio.janta.acompanhamentos[dia]}/>
                            <Option title="SOBREMESA" content={cardapio.janta.sobremesa[dia]}/>
                        </View>
                    </ScrollView>
                        
                ):( 
                    <View style={{flex:1}}>
                        <Text style={{textAlign:"center", fontWeight:"bold"}}>CARREGANDO...</Text>
                    </View>  
                )}
                   
                
            </View>
            
            
        </View>
    );
}


const estilo = StyleSheet.create({
    diaButton:{
        backgroundColor:"#404E82",
        padding:4
    },
    diaButtonSelected:{
        backgroundColor:"#b4bcda"
    },
    refeicaoTipoText:{
        fontWeight:"bold", 
        textAlign:"center", 
        backgroundColor:"black", 
        color:"white",
        paddingVertical:5,
        marginBottom:5
    },
    option:{
        backgroundColor:"white",
        marginBottom:10
    },
    optionTitle:{
        fontWeight:"bold",
        backgroundColor:"#404E82",
        color:"white",
        padding:4
    },
    optionContent:{
        padding:8
    },
    diaText:{
        color:"white",
        fontWeight:"400",
        textAlign:"center"
    }

});