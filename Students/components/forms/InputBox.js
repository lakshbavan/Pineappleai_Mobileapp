import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const InputBox = ({inputTittle, keyboardType, autoComplete,secureTextEntry= false,value, setValue}) => {
  return (
    <View>
        <Text>{inputTittle}</Text>
        <TextInput 
        style={styles.inputBox}
        autoCorrect={false}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={(text) => setValue(text)}
        />
       
    </View>
  )
}

const styles = StyleSheet.create({
    inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 10,
    },

})

export default InputBox