import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Register } from './screen/auth/Register';
import regStyle from './screen/style/RegStyle';

export default function App() {
  return (
    <View style={regStyle.container}>
      <Register/>
    </View>
  );
}

