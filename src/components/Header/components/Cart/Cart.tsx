"use client";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const router = useRouter();
  return (
    <ShoppingCart
      className="min-w-8 min-h-8 cursor-pointer text-black"
      onClick={() => router.push("/carrinho")}
    />
  );
};

export default Cart;
