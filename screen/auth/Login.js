import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import regStyle from "../style/RegStyle";
import { useState, useEffect } from "react";
import axios from "axios";
import { url_api } from "../../config";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user,setUser] = useState({});
  const navigation = props.nav;

  const loginUser = () => {
    axios.post(`${url_api}/login`, {
      username: username,
      password: password,
    })
      .then((response) => {
        
        AsyncStorage.setItem('username', username.toString())
        AsyncStorage.setItem('firstname', user.firstname.toString())
        AsyncStorage.setItem('lastname', user.lastname.toString())
        navigation.navigate('Profile', { username: username },{firstname: user.firstname},{lastname: user.lastname});
      })
      .catch((error) => {
        // Handle login error
        console.error('Login failed:', error);
      });
  };
  const getUser = (username) => {
    axios.get(`${url_api}/users/${username}`)
      .then((response) => {
        setUser(response.data);
        console.log(user)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onSignUpPress = () => {
    navigation.push('Register');
  };
  useEffect(() => {
    getUser(username);
  }, [username]);
  return (
    <SafeAreaView style={regStyle.container}>
      <View style={{ flex: 1 }}></View>
      <View style={regStyle.inputContainer}>
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold' }}>
            Smart Maid Login
          </Text>
        </View>
        <View style={{ flex: 1, marginVertical: 10 }}>
          <TextInput style={regStyle.inputBoxLogin} placeholder='Username' secureTextEntry={false}
            value={username} onChangeText={(text) => setUsername(text)} />

          <TextInput style={regStyle.inputBoxLogin} placeholder='Password' secureTextEntry={true}
            value={password} onChangeText={(text) => setPassword(text)} />
        </View>
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
