"use client";
import { Product } from "@/types/types";
import { Button } from "@/components";
import Image from "next/image";
import { useStore } from "@/store/useStore";
import { Minus, Plus } from "lucide-react";

export default function ItemCard({
  id,
  title,
  image,
  price,
  quantity,
}: Product) {
  const { removeFromCart } = useStore();

  return (
    <div
      key={id}
      className="flex w-full justify-between items-center h-26 p-2 shadow rounded-lg"
    >
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={title}
          width={80}
          height={80}
          className="cursor-pointer max-w-20 max-h-20"
        />
        <div className="flex flex-col">
          <span className="font-semibold">{title}</span>
          <span className="text-gray-500">$ {price}</span>
          <div className="flex p-2 gap-3 justify-between items-center w-20 h-6 rounded-lg border-2">
            <Minus className="w-5 h-5 cursor-pointer" />
            <span className="text-[16px] font-bold">{quantity}</span>
            <Plus className="w-5 h-5 cursor-pointer" />
          </div>
        </div>
      </div>
      <Button
        onClick={() => removeFromCart(id)}
        className="flex justify-center items-center w-22 h-8 cursor-pointer rounded bg-red-500 hover:bg-red-600 text-white"
      >
        Remover
      </Button>
    </div>
  );
}
