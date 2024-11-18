import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

const ScreenWrapper = ({ children, p = 16 }) => {
    return (
        <View style={[styles.container, { padding: p }]}>
            <StatusBar style='dark' />
            {children}
        </View>
    )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#40A578",
        flex: 1,
    },
})