import { create } from "zustand";

type CartItem = {
  id: string | number;
  name: string;
  price: string;
  image: string;
};

type CartStore = { items: CartItem[] };

export const useCartStore = create<CartStore>(() => ({ items: [] }));
