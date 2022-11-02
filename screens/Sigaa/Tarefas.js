import React from "react";
import {Button, View, FlatList, Text, useColorScheme} from "react-native";
import { GetHeaders, WorkExtract, convertDataToText} from "./Sigaa-utils";
import {dark} from '../../assets/css/dark';
import {light} from '../../assets/css/light';

const WorkExtractor = new WorkExtract;

export default function Tarefas({sessionID, handler, disciplina}){
    const [tarefas, setTarefas] = React.useState([]);
    const [encontradaTarefa, setEncontradaTarefa] = React.useState("Procurando tarefas...");
    const [isMounted, setIsMounted] = React.useState(true);
    const deviceTheme = useColorScheme(); var theme = light; if(deviceTheme == "dark"){theme = dark;}else {theme = light;}
    React.useEffect(()=>{
        setIsMounted(true);
        (async ()=>{

            const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
                method: "post",
                headers: GetHeaders(sessionID),
                body: disciplina.payload
            })
            const responseText = await response.text();
            WorkExtractor.updateData(responseText);
            const ts = WorkExtractor.getData().tarefas;
            
            if(isMounted){
                setTarefas(ts);
                setEncontradaTarefa(ts.length === 0 ? "Nenhuma tarefa Encontrada!" : "");
            }
            
        })();
        return ()=>{
            setIsMounted(false);
        };
    }, []);

    const renderItem = ({item}) =>{
        return (
            <View 
                style={[theme.tarefa, item.tarefaEnviada?theme.tarefaEnviada:theme.tarefaNaoEnviada]}
                accessible={true}
                accessibilityLabel={`Tarefa ${item.titulo} Periodo de entrega de ${convertDataToText(item.periodo.de.data)} até ${convertDataToText(item.periodo.para.data)} ${item.tarefaEnviada?"Você já enviou essa tarefa": "Você ainda não enviou essa tarefa"}`}    
            >
                <Text style={theme.tarefaTitle}>{item.titulo}</Text>
                <Text>Periodo: {item.periodo.msg}</Text>
                <View style={{flex:1, flexDirection:"row", justifyContent: "space-between"}}>
                    <Text>Em grupo: {item.emGrupo}</Text>
                    <Text>Envios: {item.envios}</Text>
                </View>
                {(item.notaMax !== "")?(<Text>Nota máxima: {item.notaMax}</Text>):(null)}
            </View>
        );
    }

    return (
        <View style={theme.tarefaContainer}>
            <Button title="Voltar" onPress={ ()=>{handler(true)} }/>
            <FlatList 
                ListEmptyComponent={()=>{
                    return (
                        <View>
                            <Text style={theme.tarefa2}>{encontradaTarefa}</Text>
                        </View>
                    );
                }} 
            
                renderItem={renderItem} 
                data={tarefas} 
                keyExtractor={(item)=>{return item.titulo+item.periodo.msg} }/>
        </View>

    );
}