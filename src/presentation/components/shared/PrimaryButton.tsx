import { Pressable, Text } from "react-native"
import { globalStyles } from "../../theme/theme"

interface Props {
    textButton: string
    onPress: () => void
}

export const PrimaryButton = ({
    textButton,
    onPress
}: Props) => {

    return (
        <Pressable style={globalStyles.primaryButton}
            onPress={onPress}
        >
            <Text style={globalStyles.buttonText}> {textButton} </Text>
        </Pressable>
    )
}