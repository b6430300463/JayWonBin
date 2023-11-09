import {View,Text,Image,SafeAreaView,Switch} from 'react-native'
import mainStyle from '../style/MainStyle'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { setStatusBarHidden } from 'expo-status-bar'

export const Main = (props) => {
    
    const bin_full = <Ionicons name="trash-sharp" size={300} color="#6f1d1b" />;
    const bin_emp = <Ionicons name="trash-outline" size={300} color="#132a13" />;

    const [binFull,setBinFull] = useState(false);
    const [statedis,setStatedis] = useState();
    const bin_img = binFull ? bin_full : bin_emp

    const toggleSwitch = () => {
        setBinFull(!binFull);
    }

    const getDistanceState = () =>{
        axios.get(`${url_api}/statedistance/1`)
        .then((response)=>{
            setStatedis(response.data)
            console.log(state)
            if(state === '1'){
                setBinFull(true)
            }else{
                setBinFull(false)
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        getDistanceState();
    }, []);
    return(
        <SafeAreaView style={mainStyle.container}>
            <View style={{flex:1}}></View>
            <View style={mainStyle.pages}>
                <View style={{flex:1,justifyContent:'center',alignItems:'center',borderWidth:2 ,borderColor:'#ffffff'}}>
                    {bin_img}
                 </View>
                 <View style={{paddingVertical:20,alignItems:'center',justifyContent:'center',borderWidth:2,borderColor:'#ffffff',backgroundColor:'#219ebc'}}>
                    <Text style={{fontSize:20,fontWeight:'bold',paddingBottom:10,color:'white'}}>Status : {binFull ? "Full" : "Empty"}</Text>
                    <Switch
                    trackColor={{false:'#06d6a0',true:'#6f1d1b'}}
                    value={binFull}
                    onValueChange={toggleSwitch}
                    />
                </View>
            </View>
            <View style={{flex:1}}></View>
        </SafeAreaView>
    )
}