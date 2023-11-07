import { SafeAreaView,View,Text,TextInput, TouchableOpacity,Image } from "react-native";
import regStyle from "../style/RegStyle";
import { useState } from "react";

export const Login  = (props) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const LOGO = {uri:'https://i.ibb.co/wNJTZs5/logo1.png'}
    const navigation = props.nav

    const onLogInPress = () => {
        navigation.push('MainScreen')
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
                    {/* <Image source={LOGO} style={{ alignItems: 'center', width: '60%', height: '85%'}}></Image> */}
                </View>
                <View style={{flex:1,marginVertical:10}}>
                <TextInput style={regStyle.inputBoxLogin} placeholder='Username' secureTextEntry={false}
                    value={username} onChangeText={(text) => setUsername(text)} />
                <TextInput style={regStyle.inputBoxLogin} placeholder='Password' secureTextEntry={false}
                    value={password} onChangeText={(text) => setPassword(text)} />
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