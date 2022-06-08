import React from "react";
import {View, Text, Button, FlatList, TouchableOpacity, Alert} from "react-native";
import { GetHeaders } from "./Sigaa-utils";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import {Buffer} from "buffer";
import axios from 'axios';


export default function Arquivos({data, handler, sessionID}){
    const [baixando, setBaixando] = React.useState(false);
    function download(item){

        setBaixando(true);
        console.log("Iniciando Download");
        let fileName = item.nome.includes(".pdf") ? item.nome : item.nome+ ".pdf";
        let uri = FileSystem.documentDirectory + fileName;
        console.log("Arquivo sera salvo em ", uri);

        

        (async()=>{
            const response = await axios({
                method: 'post',
                url: 'https://si3.ufc.br/sigaa/ava/index.jsf',
                data: item.payload,
                headers: GetHeaders(sessionID),
                responseType: "arraybuffer"
              });
            console.log(response.status);
            const buff = Buffer.from(response.data, 'base64')
            const saida =  buff.toString('base64')
            await FileSystem.writeAsStringAsync(uri, saida, { encoding: FileSystem.EncodingType.Base64 });
            await Sharing.shareAsync(uri);

            Alert.alert("Download completo", `O arquivo ${fileName} foi baixado com sucesso!`);

        })();

        setBaixando(false);
    }

    function renderItem({item}){
        return (
            <View style={estilos.fileContainer}>
                <TouchableOpacity onPress={()=>{
                        if(!baixando){
                            Alert.alert("Download Iniciado", "Por favor espere o download finalizar");
                            download(item);
                        }
                        else{
                            Alert.alert("Outro arquivo está sendo baixado!");
                        }
                        
                    }}>
                    <Text>{item.nome}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={estilos.container}>
            <Button title="Voltar" onPress={()=>{handler(true)}}/>
            <FlatList data={data} renderItem={renderItem}
                ListEmptyComponent={<Text style={{textAlign:"center", margin: 20}}>Nenhum arquivo foi encontrado!</Text>}
                keyExtractor={(item)=>{return item.nome+item.payload}}
            />
        </View>
    );
}

const estilos = {
    fileContainer: {
        padding: 10,
        marginTop: 10,
        backgroundColor: "#ccc"
    },
    container: {
        padding: 10,
        marginBottom: 40
    }
}