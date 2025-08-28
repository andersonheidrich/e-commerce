"use client";
import { useCartStore } from "@/features/cart/store/cart";

export default function CartList() {
  const { items } = useCartStore();

  return (
    <div className="flex flex-col w-full justify-center items-center mt-20 gap-4">
      <div className="font-bold">
        {items.length === 0
          ? `Você não possui itens no carrinho!`
          : `Você possui ${items.length} itens no carrinho!`}
      </div>
      <div className="flex w-280 h-192 justify-center items-center border-2 rounded-lg">
        ITENS
      </div>
    </div>
  );
}
