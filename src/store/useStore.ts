import { create } from "zustand";
import { Product } from "@/types/types";

type CartItem = Product & { quantity: number };

type Store = {
  products: Product[];
  cart: CartItem[];
  categories: string[];
  fetchProducts: () => Promise<void>;
  fetchCategories: () => Promise<void>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useStore = create<Store>((set) => ({
  products: [],
  categories: [],
  cart: [],

  fetchProducts: async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data: Product[] = await res.json();
    set({ products: data });
  },

  fetchCategories: async () => {
    const res = await fetch("https://fakestoreapi.com/products/categories");
    const data: string[] = await res.json();
    set({ categories: data });
  },

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}));
