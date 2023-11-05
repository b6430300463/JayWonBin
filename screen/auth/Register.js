import { SafeAreaView,View,Text,TextInput } from "react-native";
import regStyle from "../style/RegStyle";
import AuthInput from "./AuthInput";
import { useState } from "react";

export const Register = (props) => {
    const [firstname,setFirstname] = useState("");
    return(
        <SafeAreaView style={regStyle.container}>
            <View style={{flex:1}}>
            <AuthInput placeholder='Firstname' secureTextEntry={false}
             value={firstname} onChangeText={(text) => setFirstname(text)} />
            <Text>Hi</Text>
            </View>
        </SafeAreaView>
    )
}