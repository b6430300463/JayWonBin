import React from 'react'
import { View, TextInput } from 'react-native'
import {RegStyle} from '../style/RegStyle'

const AuthInput = (props) => {
  const { secureTextEntry, value, onChangeText } = props

  return (
    <View style={{ flex: 1, paddingVertical: 5, borderWidth: 0, justifyContent: 'center' }}>
      {secureTextEntry
        ? (<TextInput
          secureTextEntry={true}
          style={RegStyle.inputBox}
          placeholder={props.placeholder}
          placeholderTextColor="gray"
          value={value}
          onChangeText={(text) => onChangeText(text)}
        ></TextInput>)
        : (<TextInput
          style={RegStyle.inputBox}
          placeholder={props.placeholder}
          placeholderTextColor="gray"
          value={value}
          onChangeText={(text) => onChangeText(text)}
        ></TextInput>)
      }
    </View>
  )
}
export default AuthInput