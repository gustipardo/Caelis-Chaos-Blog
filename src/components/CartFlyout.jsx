import { useStore } from '@nanostores/react';
import { isCartOpen } from '@/store/cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);

  return $isCartOpen ? <aside>...</aside> : null;
}