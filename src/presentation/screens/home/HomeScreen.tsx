import { Pressable, View } from "react-native"
import { globalColors, globalStyles } from "../../theme/theme"
import { DrawerActions, type NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { type RootStackParams } from "../../routes/StackNavigator"
import { useEffect } from "react"
import { IonIcons } from "../../components/shared/IonIcons"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu"


export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    /*  useEffect(() => {
         navigation.setOptions({
             headerLeft: () => (
                 <Pressable
                     style={{ marginLeft: 5 }}
                     onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
                 >
                     <IonIcons name='menu-outline' color={globalColors.primary} />
                 </Pressable>
             )
         })
     }, []) */

    return (
        <View style={globalStyles.container}>
            <HamburgerMenu />
            <PrimaryButton
                textButton="Productos"
                onPress={() => navigation.navigate('Products')}
            />
            <PrimaryButton
                textButton="Settings"
                onPress={() => navigation.navigate('Settings')}
            />
        </View>
    )
}