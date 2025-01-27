import { View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { useNavigation } from "@react-navigation/native"
import { PrimaryButton } from "../../components/shared/PrimaryButton"


export const HomeScreen = () => {

    const navigation = useNavigation()

    return (
        <View style={globalStyles.container}>
            <PrimaryButton
                textButton="Productos"
                onPress={() => navigation.navigate('Products' as never)}
            />
            <PrimaryButton
                textButton="Settings"
                onPress={() => navigation.navigate('Settings' as never)}
            />
        </View>
    )
}