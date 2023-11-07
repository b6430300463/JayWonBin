import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Register,Login } from './screen/auth/Register';
import regStyle from './screen/style/RegStyle';
import { NavigationContainer } from '@react-navigation/native'
import { StackNav } from './screen/navigator/Stacknav';

export default function App() {
  return (
    <SafeAreaView style={regStyle.container}>
      <NavigationContainer>
        <StackNav/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

