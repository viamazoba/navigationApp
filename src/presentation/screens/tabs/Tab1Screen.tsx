import { Text, View } from "react-native"
import { HamburgerMenu } from "../../components/shared/HamburgerMenu"
import { IonIcons } from "../../components/shared/IonIcons";

export const Tab1Screen = () => {

    return (
        <View>
            <HamburgerMenu />
            <Text>Tab1Screen</Text>
            <IonIcons name="rocket-outline" />
        </View>
    )
}