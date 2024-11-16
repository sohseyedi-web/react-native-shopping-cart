import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { useCartStore } from '../store/useStore'
import { ChevronLeftIcon, TrashIcon } from 'react-native-heroicons/outline'
import { router } from 'expo-router'
import Empty from '../components/Empty'
import CartDetails from '../components/CartDetails'
import MiniButton from '../components/button/MiniButton'
import ProductCartButton from '../components/product/ProductCartButton'

const Cart = () => {

  const { cartItems, clearCart } = useCartStore()

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <MiniButton
          icon={<ChevronLeftIcon size={25} color={"#141414"} />}
          onPress={() => router.push("/")}
          contentStyle={{ backgroundColor: "rgb(34 197 94)" }}
        />
        {cartItems?.length > 0 ? <MiniButton
          icon={<TrashIcon size={25} color={"#fefefe"} />}
          onPress={clearCart}
          contentStyle={{ backgroundColor: "#FF4545" }}
        /> : null}
      </View>
      <View style={{ paddingTop: 12 }}>
        <FlatList data={cartItems} keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={Empty}
          contentContainerStyle={{ gap: 12 }}
          renderItem={({ item }) => (
            <View style={styles.cart}>
              <View style={{ flexDirection: "row", columnGap: 10, alignItems: "center" }}>
                <Image style={styles.image} resizeMode='contain' source={{ uri: item.img }} />
                <View>
                  <Text>{item.title}</Text>
                  <Text style={{ fontSize: 14 }}>{item.newPrice}$</Text>
                </View>
              </View>
              <ProductCartButton item={item} />
            </View>
          )}
        />
      </View>
      {cartItems?.length > 0 ? <CartDetails/> : null}
    </View >
  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40A578",
    flex: 1,
    padding: 16,
  },
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
  }
})