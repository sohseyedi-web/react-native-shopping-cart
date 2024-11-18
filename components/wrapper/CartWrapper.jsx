import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import Empty from '../Empty'
import ProductCartButton from '../product/ProductCartButton'
import FavButton from '../button/FavButton'
import { HeartIcon } from 'react-native-heroicons/solid'

const CartWrapper = ({ data, model }) => {

    return (
        <View style={{ paddingTop: 12 }}>
            <FlatList data={data} keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                ListEmptyComponent={Empty}
                contentContainerStyle={{ gap: 12 }}
                renderItem={({ item }) => (
                    <View style={styles.cart}>
                        <View style={styles.flexible}>
                            <Image style={styles.image} resizeMode='contain' source={{ uri: item.img }} />
                            <View>
                                <Text>{item.title}</Text>
                                <Text style={{ fontSize: 14 }}>{item.newPrice}$</Text>
                            </View>
                        </View>
                        {model === "cart" ?
                            <ProductCartButton item={item} /> :
                            <FavButton item={item} icon={<HeartIcon size={28} color={"#ff2929"} />} />}
                    </View>
                )}
            />
        </View>
    )
}

export default CartWrapper

const styles = StyleSheet.create({
    cart: {
        height: 65,
        borderRadius: 18,
        backgroundColor: "#fff",
        padding: 8,
        marginBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 18
    },
    flexible: {
        flexDirection: "row",
        columnGap: 10,
        alignItems: "center"
    }
})