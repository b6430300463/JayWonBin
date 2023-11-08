import { View,Text,SafeAreaView, TouchableOpacity, Alert } from "react-native"
import regStyle from "../style/RegStyle";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../../firebase/AuthModel";

export const Profile = (props) => {
    const navigation = useNavigation();

    const success = () => {
        navigation.navigate('Login')
    }
    const unsuccess = (msg) => {
        Alert.alert(msg)
    }
    const onLogoutPress = () => {
        logout(success,unsuccess)
    }
    return(
        <SafeAreaView style={regStyle.container}>
            <View style={{flex:1}}></View>
            <View style={regStyle.inputContainer}>
                <View style={{marginVertical:50,justifyContent:'center'}}>

                    <Text style={{color:'white',fontWeight:'bold'}}>Firstname</Text>
                    <Text style={regStyle.boxStyle}></Text>

                    <Text style={{color:'white',fontWeight:'bold'}}>Lastname</Text>
                    <Text style={regStyle.boxStyle}></Text>
                    
                    <Text style={{color:'white',fontWeight:'bold'}}>Username</Text>
                    <Text style={regStyle.boxStyle}></Text>

                    <Text style={{color:'white',fontWeight:'bold'}}>Logged in time</Text>
                    <Text style={regStyle.boxStyle}></Text>

                    <TouchableOpacity style={regStyle.logoutbtn} onPress={onLogoutPress}>
                        <Text style={{fontSize:20,fontWeight:'bold',color:'white'}}>Log out</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:1}}></View>
        </SafeAreaView>
    )
}