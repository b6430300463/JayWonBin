import { SafeAreaView,View,Text,TextInput, TouchableOpacity,Image } from "react-native";
import regStyle from "../style/RegStyle";
import { useState } from "react";
import { signInEmailPass } from "../../firebase/AuthModel";
import { lookupEmailByUsername } from "../../firebase/AuthModel";

export const Login  = (props) => {
    const [credential,setCredential] = useState({username:'',password:''})
    const navigation = props.nav

    const setUsername = (text) => {
        setCredential(oldValue => ({
            ...oldValue,
            username: text
        }))
    }

    const setPassword = (text) => {
        setCredential(oldValue => ({
            ...oldValue,
            password: text
        }))
    }
    const success = (item) => {
        navigation.navigate({
            name: 'Tab Navigation',
            params: {
                username: item.username
            }
        })
    
    }
    const unsuccess = () => {
        const msg = `Wrong username or password`
        console.log(msg)
        Alert.alert(msg)
    }

    const onLogInPress = () => {
        
        signInEmailPass(credential.username,credential.password,success,unsuccess)
        
    }
    const onSignUpPress = () => {
        navigation.push('Register')
    }
    return(
        <SafeAreaView style={regStyle.container}>
            <View style={{flex:1}}></View>
            <View style={regStyle.inputContainer}>
                <View style={{flex:2,backgroundColor:'whtie',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>
                        Smart Maid Login</Text>
                </View>
                <View style={{flex:1,marginVertical:10}}>

                <TextInput style={regStyle.inputBoxLogin} placeholder='Username' secureTextEntry={false}
                    value={credential.username} onChangeText={(text) => setUsername(text)} />

                <TextInput style={regStyle.inputBoxLogin} placeholder='Password' secureTextEntry={true}
                    value={credential.password} onChangeText={(text) => setPassword(text)} />

                </View>

                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:25}}>
                    <TouchableOpacity style={regStyle.signUpBTN} onPress={onLogInPress}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Log in</Text>    
                    </TouchableOpacity>    
                    <TouchableOpacity style={regStyle.signUpBTN} onPress={onSignUpPress}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Sign up</Text>    
                    </TouchableOpacity>    
                </View>        
             </View>
             <View style={{flex:1}}></View>
        </SafeAreaView>        
    )
}