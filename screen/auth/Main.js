import {View,Text,Image,SafeAreaView,Switch} from 'react-native'
import mainStyle from '../style/MainStyle'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useState } from 'react'


export const Main = () => {
    const empty = {uri:'https://i.ibb.co/SRDHvYs/bin-Emp2-0.jpg'}
    const full = {uri:'https://i.ibb.co/k8yy3kX/binFull.jpg'}

    const [binFull,setBinFull] = useState(false);

    const bin_img = binFull ? full : empty

    const toggleSwitch = () => {
        setBinFull(!binFull);
    }
    return(
        <SafeAreaView style={mainStyle.container}>
            <View style={{flex:1}}></View>
            <View style={mainStyle.pages}>
                <Image source={bin_img} style={{ alignItems: 'center',
                justifyContent:'center',
                 width: '100%', height: '90%'}}/>
                <View style={{flex:1,paddingHorizontal:'30%',flexDirection:'row'}}>
                    <Text style={{fontSize:20,fontWeight:'bold'}}>Status : {binFull ? "Full" : "Empty"}</Text>
                </View>
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',marginBottom:20}}>                 
                <Switch
                    value={binFull}
                    onValueChange={toggleSwitch}
                />
            </View>
        </SafeAreaView>
    )
}