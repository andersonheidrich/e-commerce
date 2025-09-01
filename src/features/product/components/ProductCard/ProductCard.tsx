"use client";
import { useStore } from "../../../../store/useStore";
import { Product } from "@/features/product/types";
import { Button } from "@/components";
import Image from "next/image";

export default function ProductCard({
  id,
  title,
  image,
  price,
  quantity,
}: Product) {
  const { addToCart } = useStore();

  return (
    <div
      key={id}
      className="flex flex-col justify-between items-center w-70 h-85 p-2 border-2 rounded-lg"
    >
      <div className="flex min-w-40 min-h-40 items-center">
        <Image
          src={image}
          alt={title}
          width={160}
          height={160}
          className="cursor-pointer max-w-40 max-h-40"
        />
      </div>
      <span className="flex justify-center items-center font-bold">
        {title}
      </span>
      <span className="flex justify-center items-center">
        R$ {price.toFixed(2)}
      </span>
      <Button
        className="flex justify-center items-center min-w-22 min-h-8 cursor-pointer rounded bg-blue-600 hover:bg-blue-700 text-white"
        onClick={() => addToCart({ id, title, image, price, quantity })}
      >
        Adicionar
      </Button>
    </div>
  );
}
