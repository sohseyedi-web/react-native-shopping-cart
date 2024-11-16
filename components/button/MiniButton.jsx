import { Pressable, StyleSheet } from "react-native";

const MiniButton = ({ icon, onPress, contentStyle }) => {


    return (
        <Pressable style={[styles.btn, contentStyle]} onPress={onPress}>
            {icon}
        </Pressable>
    );
};

export default MiniButton;

const styles = StyleSheet.create({
    btn: {
        padding: 5,
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
        position: "relative"
    },
});
