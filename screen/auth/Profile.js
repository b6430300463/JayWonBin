import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import regStyle from "../style/RegStyle";
import { useNavigation } from "@react-navigation/native";
import { url_api } from "../../config";
import axios from "axios";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const Profile = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState([]);
  const [username, setUsername] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [currentDate,setCurrentDate] = useState('');

    const getUsernameFromStorage = async () => {
        try {
            const storedFirstname = await AsyncStorage.getItem('firstname');
            const storedLastname = await AsyncStorage.getItem('lastname');
            const storedUsername = await AsyncStorage.getItem('username');
            const storedCurrentDate = await AsyncStorage.getItem('currentDate');

            if (storedUsername) {
                setUsername(storedUsername);
            }
            if (storedCurrentDate) {
                setCurrentDate(storedCurrentDate)
            }
            if(storedFirstname){
                setFirstname(storedFirstname);
            }
            if(storedLastname){
                setLastname(storedLastname)
            }
        } catch (error) {
            console.log(error);
        }
    };


  const onLogoutPress = async () => {
    try {
      await AsyncStorage.clear();
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };

   useEffect(() => {
     getUsernameFromStorage();
   }, []);

  return (
    <SafeAreaView style={regStyle.container}>
      <View style={{ flex: 1 }}></View>
      <View style={regStyle.inputContainer}>
        <View style={{ marginVertical: 50, justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Firstname</Text>
          <Text style={regStyle.boxStyle}>{firstname}</Text>

          <Text style={{ color: 'white', fontWeight: 'bold' }}>Lastname</Text>
          <Text style={regStyle.boxStyle}>{lastname}</Text>

          <Text style={{ color: 'white', fontWeight: 'bold' }}>Username</Text>
          <Text style={regStyle.boxStyle}>{username}</Text>

          <Text style={{ color: 'white', fontWeight: 'bold' }}>Logged in time</Text>
          <Text style={regStyle.boxStyle}>{currentDate}</Text>

          <TouchableOpacity style={regStyle.logoutbtn} onPress={onLogoutPress}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Log out</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}></View>
    </SafeAreaView>
  );
};
