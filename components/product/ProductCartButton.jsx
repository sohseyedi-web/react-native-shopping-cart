import { Pressable, StyleSheet, Text, View, Animated } from 'react-native'
import { checkInCart } from '../../utils/checkInCart'
import { useCartStore } from '../../store/useStore'
import { MinusIcon, PlusIcon } from 'react-native-heroicons/outline'
import { useEffect, useRef } from 'react'
import MiniButton from '../button/MiniButton'

const ProductCartButton = ({ item }) => {
    const { cartItems, addItemToCart, removeItemFromCart } = useCartStore()
    const isCheck = checkInCart(cartItems, item)
    const cart = cartItems.find((c) => c.id === item.id)

    const scaleAnim = useRef(new Animated.Value(1)).current
    const quantityAnim = useRef(new Animated.Value(1)).current

    useEffect(() => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 0.95,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            })
        ]).start()
    }, [isCheck])

    useEffect(() => {
        if (cart?.quantity) {
            Animated.sequence([
                Animated.timing(quantityAnim, {
                    toValue: 1.2,
                    duration: 100,
                    useNativeDriver: true,
                }),
                Animated.timing(quantityAnim, {
                    toValue: 1,
                    duration: 100,
                    useNativeDriver: true,
                })
            ]).start()
        }
    }, [cart?.quantity])

    return (
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
            {isCheck ? (
                <View style={styles.check}>
                    <MiniButton
                        icon={<MinusIcon size={24} color="#fefefe" />}
                        onPress={() => removeItemFromCart(item.id)}
                        contentStyle={styles.checkBtn}
                    />
                    <Animated.Text
                        style={[
                            { color: "#141414", fontSize: 20 },
                            { transform: [{ scale: quantityAnim }] }
                        ]}
                    >
                        {cart.quantity}
                    </Animated.Text>
                    <MiniButton
                        icon={<PlusIcon size={24} color="#fefefe" />}
                        onPress={() => addItemToCart(item)}
                        contentStyle={styles.checkBtn}
                    />
                </View>
            ) : (
                <Pressable
                    onPress={() => addItemToCart(item)}
                    style={styles.btn}
                >
                    <Text style={{ fontSize: 17, color: "#fefefe", fontWeight: "600" }}>Add To Cart</Text>
                </Pressable>
            )}
        </Animated.View>
    )
}

export default ProductCartButton

const styles = StyleSheet.create({
    btn: {
        height: 35,
        borderRadius: 18,
        backgroundColor: "rgb(34 197 94)",
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    check: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 8,
        columnGap: 12,
        height: 35,
        backgroundColor: "#eaeaea",
        borderRadius: 12
    },
    checkBtn: {
        backgroundColor: "rgb(34 197 94)",
        height: 28,
        width: 28,
        justifyContent: "center",
        alignItems: "center"
    }
})