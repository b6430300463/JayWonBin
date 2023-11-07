import { View,Text,SafeAreaView } from "react-native"
import regStyle from "../style/RegStyle";

export const Profile = () => {
    return(
        <SafeAreaView style={regStyle.container}>
            <View style={{flex:1}}></View>
            <View style={regStyle.inputContainer}>
                
            </View>
            <View style={{flex:1}}></View>
        </SafeAreaView>
    )
}