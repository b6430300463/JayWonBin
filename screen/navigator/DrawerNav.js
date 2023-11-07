import { createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList } from '@react-navigation/drawer'
import { Profile } from '../auth/Profile'
import {Main} from '../auth/Main'
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'

const Drawer = createDrawerNavigator()


const ProfileScreen = ({ navigation, route }) => {
    return (
        <Profile nav={navigation} route={route} />
    )

}
const MainScreen = ({ navigation, route }) => {
    return (
        <Main nav={navigation} route={route} />
    )

}

export const DrawerNav = () => {
    return(
        <Drawer.Navigator
        useLegacyImplementation
        initialRouteName='MainScreen'
        screenOptions={{
            headerStyle: styles.headerStyle,
            drawerStyle: styles.drawerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            header: (props) => <CustomHeaderBar {...props} />,
            drawerActiveTintColor: '#447706',
            drawerInactiveTintColor: '#A8A9A6',
            drawerLabelStyle: styles.drawerLabelStyle
        }}>
            <Drawer.Screen name='Profile' component={ProfileScreen}
            options={{
                title:'Profile',
                drawerLabel:'Profile',
                drawerIcon: ({focused}) => (<Ionicons name={focused ? 'person' : 'person-outline'}/>)
            }}/>
            <Drawer.Screen name='MainScreen' component={MainScreen}/>
        </Drawer.Navigator>
    )
}