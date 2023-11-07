import {Login} from '../auth/Login'
import {Register} from '../auth/Register'
import { Main} from '../auth/Main'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const LoginScreen = ({ navigation, route }) => {
    return (
      <Login nav={navigation} route={route} />
    )
}
const RegisterScreen = ({ navigation, route }) => {
    return (
      <Register nav={navigation} route={route} />
    )
}
const MainScreen = ({ navigation, route }) => {
    return (
      <Main nav={navigation} route={route} />
    )
}
export const StackNav = () => {
    
    return(
        <Stack.Navigator      
        screenOptions={
            { headerShown: false }
        }>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="MainScreen" component={MainScreen} />
        </Stack.Navigator>
    )
}