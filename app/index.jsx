import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderApp from '../components/HeaderApp'
import { products } from '../constant/product';
import { useCartStore } from '../store/useStore';
import CategoryList from '../components/category/CategoryList';
import ProductCart from '../components/product/ProductCart';

const HomePage = () => {

  const { selectedCompany } = useCartStore()
  const isAll = selectedCompany === "" || selectedCompany === "All"
  const filterProducts = products.filter(
    (item) =>
        isAll
        ? products
        : item.company.toLowerCase() === selectedCompany.toLowerCase())



  return (
    <View style={styles.container}>
      <HeaderApp />
      <ScrollView style={styles.content}>
        <Text style={styles.title}>ShoeShop</Text>
        <Text style={styles.subtitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
        <CategoryList />
        <View style={{ marginTop: 9, flex: 1 }}>
          <FlatList
            data={filterProducts}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 12 }}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            renderItem={({ item }) => <ProductCart item={item} />}
            ListEmptyComponent={() => (
              <Text>محصولی یافت نشد</Text>
            )}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#40A578",
    flex: 1
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "#fefefe"
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "semibold",
    color: "#eee"
  }
})