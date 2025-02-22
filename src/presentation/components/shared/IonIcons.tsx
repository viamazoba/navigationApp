import Icon from "@react-native-vector-icons/ionicons"
import ionicGlyphmap from '../../../../node_modules/@react-native-vector-icons/ionicons/glyphmaps/Ionicons.json';

interface Props {
    name: keyof typeof ionicGlyphmap;
    size?: number;
    color?: string;
}

export const IonIcons = ({
    name,
    size = 25,
    color = 'black'
}: Props) => {

    return (
        <Icon name={name} size={size} color={color} />
    )
}