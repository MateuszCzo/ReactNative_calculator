import { TouchableOpacity, Text } from "react-native";
import { Styles } from '../styles/GlobalStyles';

interface ButtonProps {
    onPress: () => void;
    title: string;
    buttonStyle: StyleSheet;
}

export default function Button({title, onPress, buttonStyle}: ButtonPress) {
    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={Styles.smallTextDark}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}