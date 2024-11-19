import { View, Text, StyleSheet } from 'react-native';
import { useMemo, useRef } from 'react';
import BottomSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { useCartStore } from '../store/useStore';
import SubmitButton from './button/SubmitButton';

const CartDetails = () => {
  const bottomSheetRef = useRef(null);
  const { cartItems } = useCartStore();

  const total = cartItems.reduce((sum, item) => sum + (item.newPrice * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const snapPoints = useMemo(() => ['25%', '50%'], []);

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
  );

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      enablePanDownToClose={true}
      index={0}
    >
      <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
        {cartItems.length > 0 ? (
          renderCartSummary()
        ) : (
          <Text style={{ textAlign: 'center', color: '#666' }}>Your cart is empty</Text>
        )}
      </BottomSheetScrollView>
    </BottomSheet>
  );
};

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
    fontWeight: "semibold",
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
});

export default CartDetails;
