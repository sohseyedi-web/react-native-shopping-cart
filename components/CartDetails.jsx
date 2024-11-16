import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useMemo, useRef } from 'react'
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import { useCartStore } from '../store/useStore'
import SubmitButton from './button/SubmitButton'

const CartDetails = () => {
  const bottomSheetRef = useRef(null)
  const { cartItems } = useCartStore()

  // محاسبه جمع کل
  const total = cartItems.reduce((sum, item) => sum + (item.newPrice * item.quantity), 0)

  // تعریف نقاط توقف BottomSheet
  const snapPoints = useMemo(() => ['25%', '50%', '90%'], [])

  // محاسبه تعداد کل آیتم‌ها
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  const renderCartSummary = () => (
    <View style={styles.summaryContainer}>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Items:</Text>
        <Text style={styles.summaryValue}>{totalItems} num</Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Total Cart:</Text>
        <Text style={styles.summaryValue}>{total.toLocaleString()} $</Text>
      </View>

      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Shipping :</Text>
        <Text style={styles.summaryValue}>
          {total > 50 ? 'Free' : '5 $'}
        </Text>
      </View>

      <View style={styles.divider} />

      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total Amount:</Text>
        <Text style={styles.totalValue}>
          {(total + (total > 50 ? 0 : 5)).toLocaleString()} $
        </Text>
      </View>
      <SubmitButton title={"Complete Order"} textStyle={{ color: "#fefefe" }} contentStyle={{ backgroundColor: "rgb(34 197 94)" }} />
    </View>
  )

  

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={false}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        {renderCartSummary()}
      </BottomSheetScrollView>
    </BottomSheet>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
  summaryContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryLabel: {
    fontSize: 18,
    color: '#141414',
    fontWeight: "semibold"
  },
  summaryValue: {
    color: '#141414',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#000',
    marginVertical: 12,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  totalLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'rgb(34 197 94)',
  },
  checkoutButton: {
    backgroundColor: 'rgb(34 197 94)',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orderItemsContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  orderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  orderItemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 12,
    color: '#666',
  },
  itemPrice: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
})

export default CartDetails