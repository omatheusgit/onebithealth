import React, {useState} from "react";
import { TextInput, View, Text, Button } from "react-native";
import ResultIMC from "./ResultIMC";

export default function Form(){

const [heigh, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("Preencha o peso e altura")
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")

function imcCalculator(){
    return setImc((weight/(heigh*heigh)).toFixed(2))
}

function validationImc(){
    if(weight != null && heigh != null){
        imcCalculator()
        setHeight(null)
        setWeight(null)
        setMessageImc("Seu IMC é igual: ")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")
}

    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput onChangeText={setHeight} value={heigh} placeholder="Ex. 1.75" keyboardType="numeric"/>
                
                <Text>Peso</Text>
                <TextInput onChange={setWeight} value={weight} placeholder="Ex. 75.56" keyboardType="numeric"/>

                <Button title={textButton} onPress={() => validationImc()}/>
            </View>
            <ResultIMC messageResultImc={messageImc} ResultIMC={imc} />
        </View>
    );
}