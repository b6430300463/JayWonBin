import { SafeAreaView,View,Text,TextInput, TouchableOpacity, Alert } from "react-native";
import regStyle from "../style/RegStyle";
import { useState } from "react";
import { signUpEmailPass } from "../../firebase/AuthModel";

export const Register = (props) => {
    const [profile,setProfile] = useState({'firstname':'','lastname':'','studentID':'','username':'','password':''})

    const navigation = props.nav

    const setFirstname = (text) => {
        setProfile(oldValue => ({
            ...oldValue,
            firstname: text
        }))
    }

    const setLastname = (text) => {
        setProfile(oldValue => ({
            ...oldValue,
            lastname: text
        }))
    }
    const setUsername = (text) => {
        setProfile(oldValue => ({
            ...oldValue,
            username: text
        }))
    }

    const setPassword = (text) => {
        setProfile(oldValue => ({
            ...oldValue,
            password: text
        }))
    }
    const setEmail = (text) => {
        setProfile(oldValue => ({
            ...oldValue,
            email: text
        }))
    }
    const success = (doc) => {
        Alert.alert(`${doc.username} has been added to system`)
        navigation.goBack() 
    }
    const unsuccess = () => {
        const msg = `Sign up error ${error}`
        Alert.alert(msg)
    }
    const onSignUpPress = () => {
        console.log(profile)
        signUpEmailPass(profile,success,unsuccess)
        
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
                    value={profile.firstname} onChangeText={(text) => setFirstname(text)} />

                <TextInput style={regStyle.inputBox} placeholder='Lastname' secureTextEntry={false}
                    value={profile.lastname} onChangeText={(text) => setLastname(text)} />

                <TextInput style={regStyle.inputBox} placeholder='Username' secureTextEntry={false}
                    value={profile.username} onChangeText={(text) => setUsername(text)} />

                <TextInput style={regStyle.inputBox} placeholder='Password' secureTextEntry={true}
                    value={profile.password} onChangeText={(text) => setPassword(text)} />

                <TextInput style={regStyle.inputBox} placeholder='Email' secureTextEntry={false}
                    value={profile.email} onChangeText={(text) => setEmail(text)} />

                </View>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:30}}>

                    <TouchableOpacity style={regStyle.signUpBTN} onPress={onSignUpPress}>
                        <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Sign up</Text>    
                    </TouchableOpacity>    

                </View>        
             </View>
             <View style={{flex:1}}></View>
        </SafeAreaView>
    )
}