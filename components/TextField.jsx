import { StyleSheet, TextInput, View } from "react-native";
import { hp } from "../utils/common";

const TextField = ({
    secureTextEntry = false,
    containerStyle,
    icon,
    placeHolder,
    onChange,
    value,
    multie = false,
}) => {
    return (
        <View style={[styles.input, containerStyle && containerStyle]}>
            {icon}
            <TextInput
                onChangeText={onChange}
                placeholderTextColor={"#eee"}
                placeholder={placeHolder}
                style={{ flex: 1, outline: 'none', color: "#fefefe" }}
                value={value}
                multiline={multie}
                secureTextEntry={secureTextEntry}
            />
        </View>
    );
};

export default TextField;

const styles = StyleSheet.create({
    input: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        borderCurve: "continuous",
        gap: 18,
        paddingHorizontal: 11,
        width: "100%",

        height: hp(7.2),
        borderWidth: 0.4,
        borderColor: "#fefefe",
        marginVertical: 10,
    },
});
