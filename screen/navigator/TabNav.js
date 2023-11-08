import { Text, View } from 'react-native';
import { Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Main } from '../auth/Main';
import {Profile} from '../auth/Profile';

const Tab = createBottomTabNavigator();

export const TabNav = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
            headerStyle:{
                backgroundColor:'#a2d2ff',
            },
            tabBarStyle: {
                backgroundColor: '#a2d2ff',
                paddingTop:5
            },
            headerTitleStyle:{
                fontWeight:'bold',
                fontSize:24,
                color:'#023047'
            },
            tabBarIcon: ({ focused, color, size }) => {
                let icon;
                if (route.name === 'Home') {
                icon = focused
                    ? 'trash'
                    : 'trash-o';
                } else if (route.name === 'Profile') {
                icon = focused ? 'user' : 'user-o';
                }
                return <FontAwesome name={icon} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2b2d42',
            tabBarInactiveTintColor: 'grey',
            })}
        >
            <Tab.Screen name="Home" component={Main} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}