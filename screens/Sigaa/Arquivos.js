import React from "react";
import {View, Text, Button, FlatList} from "react-native";

export default function Arquivos({data, handler}){

    function renderItem({item}){
        return (
            <View>
                <Text>{item.nome}</Text>
            </View>
        );
    }

    return (
        <View>
            <Button title="Voltar" onPress={()=>{handler(true)}}/>
            <FlatList data={data} renderItem={renderItem}
                ListEmptyComponent={<Text>Arquivos...</Text>}
            />
        </View>
    );
}