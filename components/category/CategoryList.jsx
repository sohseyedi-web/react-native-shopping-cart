import { FlatList, StyleSheet, View } from 'react-native'
import { CategoryLists } from '../../constant/cateogry'
import { useCartStore } from '../../store/useStore'
import CategoryItem from './CategoryItem'


const CategoryList = () => {
  const { selectedCompany, setSelectedCompany } = useCartStore()

  return (
    <View style={styles.category}>
      <FlatList
        data={CategoryLists}
        horizontal
        contentContainerStyle={{ gap: 12 }}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <CategoryItem
            item={item}
            isActive={(item.title === 'All' && selectedCompany === '') ||
              selectedCompany === item.title}
            onPress={() => setSelectedCompany(item.title === "All" ? '' : item.title)}
          />
        )}
      />
    </View>
  )
}

export default CategoryList

const styles = StyleSheet.create({
  category: {
    marginVertical: 16
  },
});