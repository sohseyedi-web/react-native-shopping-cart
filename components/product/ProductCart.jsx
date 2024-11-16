import { Image, StyleSheet, Text, View } from 'react-native'
import ProductCartButton from './ProductCartButton';

const ProductCart = ({ item }) => {

    return (
        <View key={item.id} style={styles.box}>
            <View style={{ height: 190, flex: 1, justifyContent: "center" }}>
                <Image source={{ uri: item.img }} resizeMode='contain' style={styles.image} />
            </View>
            <View style={{ paddingHorizontal: 8 }}>
                <Text style={{ marginVertical: 4, fontWeight: "semibold" }}>{item.title}</Text>
                <Text style={{ marginBottom: 20 }}>{item.newPrice} $</Text>
                <ProductCartButton item={item} />
            </View>
        </View>
    )
}

export default ProductCart

const styles = StyleSheet.create({
    box: {
        backgroundColor: "#fefefe",
        borderRadius: 18,
        width: "47%",
        paddingVertical: 12,
        height: 245
    },
    image: {
        height: 70,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },

})