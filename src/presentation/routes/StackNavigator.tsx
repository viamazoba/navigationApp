import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

// Ten presente que debes utilizar type y no interface, ya que este último genera problemas
export type RootStackParams = {
    Home: undefined
    Product: { id: number, name: string }
    Products: undefined
    Settings: undefined
}

const Stack = createStackNavigator<RootStackParams>();

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

    const navigator = useNavigation()

    useEffect(() => {
        navigator.setOptions({
            headerShown: false,
        })
    }, [])

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