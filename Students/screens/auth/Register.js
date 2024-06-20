import { View, Text, StyleSheet, TextInput, Alert } from 'react-native'
import React,{useState} from 'react'
import InputBox from "../../components/forms/InputBox";
import SubmitButton from "../../components/forms/SubmitButton";
import axios from 'axios';

const Register = ({navigation}) => {
  //stats
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [loading,setLoading] = useState(false)
    //function
    //btn func
    const handleSubmit = async () => {
      try{
        setLoading(true)
        if(!name || !email || !password){
         Alert.alert('Please Fill All Fields')
         setLoading(false)
         return;
        }
        setLoading(false)
        const {data} = await  axios.post('http://192.168.188.213:8080/api/v1/auth/register',{name, email,password});
        alert(data && data.message);
        console.log("Register Data==> ", {name, email,password});
      } catch (error){
        alert(error.response.data.message);
        setLoading(false)
        console.log(error)
      }
    }
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Register</Text>
      <View style={{ marginHorizontal: 20 }}>
        <InputBox inputTittle={'Name'} value={name} setValue={setName}/>
        <InputBox inputTittle={'Email'} keyboardType="email-address" autoComplete= "email" value={email} setValue={setEmail} />
        <InputBox inputTittle={'Password'} secureTextEntry={true} autoComplete="password" value={password} setValue={setPassword}/>

      </View>
      {/*<Text>{JSON.stringify({name,email,password}, null ,4)}</Text>*/}
      <SubmitButton btnTitle="Register"  loading={loading} handleSubmit={handleSubmit}/>
      <Text style={styles.linkText}>Already Register Please {" "} <Text style={styles.link} onPress={() => navigation.navigate("Login")}>LOGIN</Text>{" "}</Text>
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

export default Register