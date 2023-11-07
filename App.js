import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Register,Login } from './screen/auth/Register';
import regStyle from './screen/style/RegStyle';
import { NavigationContainer } from '@react-navigation/native'
import { StackNav } from './screen/navigator/Stacknav';
import { TabNav } from './screen/navigator/TabNav';

export default function App() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'#a2d2ff'}}>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

