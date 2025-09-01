"use client";
import { useStore } from "@/store/useStore";
import ItemCard from "../ItemCard";
import { Button } from "@/components";

export default function CartList() {
  const { cart, clearCart } = useStore();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="flex flex-col w-full min-h-screen items-center mt-20 gap-4">
      <div className="font-bold mt-8">
        {cart.length === 0
          ? `Você não possui itens no carrinho!`
          : `Você possui ${cart.length} itens no carrinho!`}
      </div>
      <div className="flex flex-col w-280 justify-start items-start p-4 gap-4">
        {cart.map((item) => (
          <ItemCard
            key={item.id}
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      {cart.length > 0 && (
        <div className="mt-6">
          <p className="font-semibold">Total: R$ {total.toFixed(2)}</p>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded mt-3 cursor-pointer"
            onClick={clearCart}
          >
            Finalizar compra
          </Button>
        </div>
      )}
    </div>
  );
}
