import { StyleSheet, View } from 'react-native';
import { myColors } from './src/styles/Colors';
import MyKeyboard from './src/components/MyKeyboard';

export default function App() {
    return (
        <View style={styles.container}>
            <MyKeyboard/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.light,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});