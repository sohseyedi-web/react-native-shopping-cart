import { router } from 'expo-router'
import { Pressable } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { ShoppingCartIcon } from 'react-native-heroicons/outline'
import Avatar from './Avatar'
import { useCartStore } from '../store/useStore'
import MiniButton from './button/MiniButton'

const HeaderApp = () => {
    const handleRouter = (value) => router.push(value)
    const { cartItems } = useCartStore()

    return (
        <View style={styles.header}>
            <Pressable onPress={() => handleRouter("/profile")}>
                <Avatar customStyle={styles.cover} />
            </Pressable>
            <View style={styles.cart}>
                <MiniButton
                    icon={<ShoppingCartIcon size={"28"} color={"#fefefe"} />}
                    onPress={() => handleRouter("/cart")}
                    contentStyle={{ backgroundColor: "transparent" }}
                />
                {cartItems?.length > 0 ? <Text style={styles.box}></Text> : null}
            </View>
        </View>
    )
}

export default HeaderApp

const styles = StyleSheet.create({
    header: {
        padding: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    cover: {
        height: 40,
        width: 40,
        borderRadius: 12
    },
    cart: {
        position: 'relative'
    },
    box: {
        position: "absolute",
        left: 3,
        top: 0,
        backgroundColor: "#141414",
        height: 10,
        width: 10,
        borderRadius: 18,
    }
})