import { SafeAreaView,View,Text,TextInput, TouchableOpacity, Alert } from "react-native";
import regStyle from "../style/RegStyle";
import { useState } from "react";
import axios from 'axios'
import { url_api } from "../../config"; 

export const Register = (props) => {
    const [userList, setUserList] = useState([])
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

    const navigation = props.nav

    const addUser = () => {
        axios.post(`${url_api}/create`,{
            firstname:firstname,
            lastname:lastname,
            username: username,
            email:email,
            password:password
        }).then(() => {
            setUserList([            
            ...userList,{
                firstname:firstname,
                lastname:lastname,
                username:username,
                email:email,
                password:password
            }])
            navigation.goBack()
        }).catch((error) => {
                Alert.alert(error)
          });
    }

    return(
        <SafeAreaView style={regStyle.container}>
            <View style={{flex:1}}></View>
            <View style={regStyle.inputContainer}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>
                        Smart Maid Registration</Text>
                </View>
                <View style={{flex:1,marginBottom:50}}>

                <TextInput style={regStyle.inputBox} placeholder='Firstname' secureTextEntry={false}
                    value={firstname} onChangeText={(text) => setFirstname(text)} />

                <TextInput style={regStyle.inputBox} placeholder='Lastname' secureTextEntry={false}
                    value={lastname}  onChangeText={(text) => setLastname(text)} />

                <TextInput style={regStyle.inputBox} placeholder='Username' secureTextEntry={false}
                    value={username}  onChangeText={(text) => setUsername(text)} />

                <TextInput style={regStyle.inputBox} placeholder='Password' secureTextEntry={true}
                    value={password}  onChangeText={(text) => setPassword(text)} />

                <TextInput style={regStyle.inputBox} placeholder='Email' secureTextEntry={false}
                    value={email}  onChangeText={(text) => setEmail(text)} />

                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:30}}>

                    <TouchableOpacity style={regStyle.signUpBTN} onPress={addUser}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Sign up</Text>    
                    </TouchableOpacity>    

                </View>        
             </View>
             <View style={{flex:1}}></View>
        </SafeAreaView>
    )
}