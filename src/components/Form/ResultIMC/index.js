import React from "react";
import { View, Text } from "react-native";

export default function ResultIMC(props){
    return(
        <View>
             <Text>{props.messageResultImc}</Text>
            <Text>{props.ResultImc}</Text>
        </View>
    );
}