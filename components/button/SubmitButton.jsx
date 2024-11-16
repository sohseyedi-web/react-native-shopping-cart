import { Pressable, StyleSheet, Text } from 'react-native'
import { hp } from './../../utils/common';

const SubmitButton = ({ title, contentStyle, textStyle }) => {
    return (
        <Pressable style={[styles.btn, contentStyle]}>
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </Pressable>
    )
}

export default SubmitButton

const styles = StyleSheet.create({
    btn: {
        height: hp(7.2),
        width: "100%",
        borderRadius: 18,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 17,
        fontWeight: "600"
    }
})