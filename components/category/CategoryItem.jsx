import { StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import { useRef } from 'react'

const CategoryItem = ({ item, isActive, onPress }) => {

    const scaleAnim = useRef(new Animated.Value(1)).current;

    const handlePress = () => {
        Animated.sequence([
            Animated.spring(scaleAnim, {
                toValue: 0.95,
                useNativeDriver: true,
                tension: 100,
                friction: 5
            }),
            Animated.spring(scaleAnim, {
                toValue: 1,
                useNativeDriver: true,
                tension: 100,
                friction: 5
            })
        ]).start();

        onPress();
    };

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={handlePress}>
            <Animated.View
                style={[
                    styles.categoryBtn,
                    {
                        backgroundColor: isActive ? 'rgb(34 197 94)' : '#fefefe',
                        transform: [{ scale: scaleAnim }]
                    },
                    isActive ? styles.activeButton : styles.inactiveButton
                ]}
            >
                <Text
                    style={[
                        styles.title,
                        { color: isActive ? "#fefefe" : "#40a578" }
                    ]}
                >
                    {item.title}
                </Text>
            </Animated.View>
        </TouchableOpacity>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryBtn: {
        borderRadius: 12,
        width: 140,
        height: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "600"
    },
    activeButton: {
        shadowColor: "rgb(34 197 94)",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 8,
    },
    inactiveButton: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
        elevation: 5,
    }
})
