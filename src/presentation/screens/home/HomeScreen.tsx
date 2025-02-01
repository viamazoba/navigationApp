import { View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { type NavigationProp, useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton"
import { type RootStackParams } from "../../routes/StackNavigator"


export const HomeScreen = () => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>()

    return (
        <View style={globalStyles.container}>
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