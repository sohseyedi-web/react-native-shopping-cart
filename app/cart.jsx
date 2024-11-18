import { useCartStore } from '../store/useStore'
import CartDetails from '../components/CartDetails'
import ScreenWrapper from '../components/wrapper/ScreenWrapper'
import CartWrapper from '../components/wrapper/CartWrapper'
import HeaderCart from '../components/HeaderCart'

const Cart = () => {

  const { cartItems, clearCart } = useCartStore()

  return (
    <ScreenWrapper>
      <HeaderCart num={0} data={cartItems} clear={clearCart} />
      <CartWrapper data={cartItems} model={"cart"} />
      {cartItems?.length > 0 ? <CartDetails /> : null}
    </ScreenWrapper >
  )
}

export default Cart
