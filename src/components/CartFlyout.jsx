import { useStore } from '@nanostores/react';
import { isCartOpen } from '@/store/cartStore';

export const CartFlyout = () => {
  const $isCartOpen = useStore(isCartOpen);

  return $isCartOpen ? <aside>Si</aside> : <aside>No</aside>;
}

export default CartFlyout