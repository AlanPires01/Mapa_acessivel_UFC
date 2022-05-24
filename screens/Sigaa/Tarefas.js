import React from "react";
import {Button, View, FlatList, Text} from "react-native";
import { GetHeaders, WorkExtract, convertDataToText} from "./Sigaa-utils";


const estilos = {
    tarefaContainer: {
        padding: 10,
        marginBottom: 40
    },
    tarefa: {
        backgroundColor: "#ddd",
        marginTop: 10,
        padding: 5
    },
    tarefaTitle: {
        fontSize: 15,
        color:"black",
        marginBottom: 4,
        fontWeight:'bold',
    },
    tarefaEnviada: {
        backgroundColor: "#dfd"
    },
    tarefaNaoEnviada: {
        backgroundColor: "#fdd"
    }
}

const WorkExtractor = new WorkExtract;

export default function Tarefas({sessionID, handler, disciplina}){
    const [tarefas, setTarefas] = React.useState([]);
    const [encontradaTarefa, setEncontradaTarefa] = React.useState("Procurando tarefas...");
    
    React.useEffect(()=>{

        (async ()=>{

            const response = await fetch("https://si3.ufc.br/sigaa/ava/index.jsf", {
                method: "post",
                headers: GetHeaders(sessionID),
                body: disciplina.payload
            })
            const responseText = await response.text();
            WorkExtractor.updateData(responseText);
            const ts = WorkExtractor.getData().tarefas;
            
            setTarefas(ts);
            setEncontradaTarefa(ts.length === 0 ? "Nenhuma tarefa Encontrada!" : "")

        })();

    }, []);

    const renderItem = ({item}) =>{
        
        return (
            <View 
                style={[estilos.tarefa, item.tarefaEnviada?estilos.tarefaEnviada:estilos.tarefaNaoEnviada]}
                accessible={true}
                accessibilityLabel={`Tarefa ${item.titulo} Periodo de entrega de ${convertDataToText(item.periodo.de.data)} até ${convertDataToText(item.periodo.para.data)} ${item.tarefaEnviada?"Você já enviou essa tarefa": "Você ainda não enviou essa tarefa"}`}    
            >
                <Text style={estilos.tarefaTitle}>{item.titulo}</Text>
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
        <View style={estilos.tarefaContainer}>
            <Button title="Voltar" onPress={ ()=>{handler(true)} }/>
            <FlatList 
                ListEmptyComponent={()=>{
                    return (
                        <View>
                            <Text style={{textAlign:"center", margin: 10}}>{encontradaTarefa}</Text>
                        </View>
                    );
                }} 
            
                renderItem={renderItem} 
                data={tarefas} 
                keyExtractor={(item)=>{return item.titulo+item.periodo.msg} }/>
        </View>

    );
}