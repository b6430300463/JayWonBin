import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import regStyle from "../style/RegStyle";
import { useState, useEffect } from "react";
import axios from "axios";
import { url_api } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = (props) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState({});
    const navigation = props.nav;

    const loginUser = () => {
        axios.post(`${url_api}/login`, {
            firstname: firstname,
            lastname: lastname,
            username: username,
            password: password,
        })
            .then((response) => {

                AsyncStorage.setItem('username', username.toString())
                AsyncStorage.setItem('firstname', firstname.toString())
                AsyncStorage.setItem('lastname', lastname.toString())
                navigation.navigate('Tab Navigation', { firstname: firstname }, { lastname: lastname }, { username: username });
            })
            .catch((error) => {
                // Handle login error
                console.error('Login failed:', error);
            });
    };
    // const getUser = (username) => {
    //     axios.get(`${url_api}/users/${username}`)
    //         .then((response) => {
    //             setUser(response.data);
    //             console.log(user)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };
    const onSignUpPress = () => {
        navigation.push('Register');
    };
    // useEffect(() => {
    //     getUser(username);
    // }, [username]);
    return (
        <SafeAreaView style={regStyle.container}>
            <View style={{ flex: 1 }}></View>
            <View style={regStyle.inputContainer}>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
                        Smart Maid Login
                    </Text>
                </View>
                
                    <TextInput style={regStyle.inputBoxLogin} placeholder='Firstname' secureTextEntry={false}
                        value={firstname} onChangeText={(text) => setFirstname(text)} />

                    <TextInput style={regStyle.inputBoxLogin} placeholder='Lastname' secureTextEntry={false}
                        value={lastname} onChangeText={(text) => setLastname(text)} />

                    <TextInput style={regStyle.inputBoxLogin} placeholder='Username' secureTextEntry={false}
                        value={username} onChangeText={(text) => setUsername(text)} />

                    <TextInput style={regStyle.inputBoxLogin} placeholder='Password' secureTextEntry={true}
                        value={password} onChangeText={(text) => setPassword(text)} />
                
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 25 }}>
                    <TouchableOpacity style={regStyle.signUpBTN} onPress={loginUser}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Log in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={regStyle.signUpBTN} onPress={onSignUpPress}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }}></View>
        </SafeAreaView>
    );
}
