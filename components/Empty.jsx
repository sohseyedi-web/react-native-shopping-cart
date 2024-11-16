import { StyleSheet, Text, View } from 'react-native'

const Empty = () => {
    return (
        <View style={styles.box}>
            <Text style={{ fontSize: 28, textAlign: "center", fontWeight: "semibold", color: "#fefefe" }}>No Items in Cart</Text>
        </View>
    )
}

export default Empty

const styles = StyleSheet.create({
    box: {
        backgroundColor: "rgb(34 197 94)",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        padding:30,
        height:300,
        borderRadius: 18,
        marginHorizontal: "auto",
        marginTop: 10
    }
})