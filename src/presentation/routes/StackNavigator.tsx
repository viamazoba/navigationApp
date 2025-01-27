import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';


const Stack = createStackNavigator();

// Esta es otra forma de hacerlo

/* export const StackNavigator = ()=> createStackNavigator({
    screens: {
        Home: HomeScreen,
        Products: ProductsScreen,
        Settings: SettingsScreen,
        Profile: ProfileScreen,
    },
}); */

export const StackNavigator = () => {

    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                }
            }}
        >
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Products' component={ProductsScreen} />
            <Stack.Screen name='Product' component={ProductScreen} />
            <Stack.Screen name='Settings' component={SettingsScreen} />
        </Stack.Navigator>
    )
}