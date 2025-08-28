"use client";
import { products } from "../../types";
import { useStore } from "../../store/products";
import Image from "next/image";
import { Button } from "@/components";

export default function ProductList() {
  const addToCart = useStore((state) => state.addToCart);
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-wrap w-300 min-h-full justify-center items-center gap-12 py-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col justify-between items-center w-60 h-70 p-4 border-2 rounded-lg"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={160}
              height={160}
              className="cursor-pointer"
            />
            <span>{product.name}</span>
            <span className="text-gray-600">R$ {product.price.toFixed(2)}</span>
            <Button
              className="flex justify-center items-center w-30 h-16 cursor-pointer rounded bg-blue-600 text-white"
              onClick={() => addToCart(product)}
            >
              Adicionar
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
