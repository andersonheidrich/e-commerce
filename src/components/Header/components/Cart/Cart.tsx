"use client";
import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

const Cart = () => {
  const router = useRouter();
  return (
    <ShoppingCart
      className="min-w-7 min-h-7 cursor-pointer text-black"
      onClick={() => router.push("/cart")}
    />
  );
};

export default Cart;
