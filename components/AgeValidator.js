import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const AgeValidator = props => {
   /* const [age, setAge] = useState(0)
    const [text, setText] = useState("")
    const [validator, setValidator] = useState(false)

    const changeTextInput = (text) => {
        setAge(parseInt(text))
        if(age>=18){
            setText("Es mayor de edad")
        }else{
            setText("Es menor de edad")
        }
      }; */       
    return (
        <View>
            <View>
            <TextInput 
         style={{height: 40, borderColor: 'gray', borderWidth:1}}
        onChangeText={text => props.changeTextInput(text)}
        value={props.age}
        />
          

        </View>
        <Text>{props.validator ? props.age: props.text}</Text>
         </View>
      )
};
export default AgeValidator;