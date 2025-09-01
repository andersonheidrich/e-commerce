"use client";
import { useStore } from "@/store/useStore";
import { useEffect } from "react";
import ProductCard from "../ProductCard";

export default function ProductList() {
  const { products, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="flex w-full min-h-screen justify-center items-start mt-20">
      <div className="flex flex-wrap w-320 justify-center gap-12 py-12">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            quantity={product.quantity}
          />
        ))}
      </div>
    </div>
  );
}
