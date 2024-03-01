import { useStore } from '@nanostores/react';
import { isCartOpen } from '@/store/cartStore';

export const CartButton = () => {
  // lee el valor del store con el hook `useStore`
  const $isCartOpen = useStore(isCartOpen);
  // escribe en el store importado usando `.set`
  return (
    <button onClick={() => isCartOpen.set(!$isCartOpen)}>Cart</button>
  )
}

export default CartButton