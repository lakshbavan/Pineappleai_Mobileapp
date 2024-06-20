import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import React,{useState, useContext} from 'react';
//import {AuthContext} from "../../context/authContext";
import InputBox from "../../components/forms/InputBox";
import SubmitButton from "../../components/forms/SubmitButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';

const Login = ({navigation}) => {
    //global state
    {/*const [state, setState] = useContext(AuthContext)*/}

    //stats
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    //function
    //btn func
    const handleSubmit = async () => {
    try{
        setLoading(true)
        if(!email || !password){
        Alert.alert('Please Fill All Fields')
        setLoading(false)
        return;
        }
        setLoading(false)
        const {data} = await  axios.post('http://192.168.188.213:8080/api/v1/auth/login',{email,password});
       // setState(data)
      //  await AsyncStorage.setItem("@auth", JSON.stringify(data) );
        alert(data && data.message);
        
        console.log("Login Data==> ", {email,password});
    } catch (error){
        alert(error.response.data.message);
        setLoading(false)
        console.log(error)
    }
    };
    // temp function to check local storage data
   {/* const getLocalStorageData = async () => {
        let data = await AsyncStorage.getItem("@auth")
        console.log("Local Storage ==>" , data);
    };
    getLocalStorageData();*/}
    return (
    <View style={styles.container}>
    <Text style={styles.pageTitle}>Login</Text>
    <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTittle={'Email'} keyboardType="email-address" autoComplete= "email" value={email} setValue={setEmail} />
        <InputBox inputTittle={'Password'} secureTextEntry={true} autoComplete="password" value={password} setValue={setPassword}/>

    </View>
    {/*<Text>{JSON.stringify({name,email,password}, null ,4)}</Text>*/}
    <SubmitButton btnTitle="Login"  loading={loading} handleSubmit={handleSubmit}/>
    <Text style={styles.linkText}>Not a user Please {" "} <Text style={styles.link} onPress={() => navigation.navigate("Register")} >Register</Text> {" "} </Text>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        backgroundColor: "#e1d5c9",
    },
    pageTitle: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        color: "1e2225",
        marginBottom: 20,
    },
    inputBox: {
        height: 40,
        marginBottom: 20,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop: 10,
    },
    linkText: {
      textAlign: "center",
    },
    link: {
      color: "red",
    }

})

export default Login