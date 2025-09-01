"use client";
import { useStore } from "@/store/useStore";
import { useEffect, useMemo } from "react";
import ProductCard from "../ProductCard";
import { useSearchParams } from "next/navigation";

export default function ProductList() {
  const { products, fetchProducts } = useStore();

  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filtered = useMemo(() => {
    if (!category) return products;
    return products.filter((p) => p.category === decodeURIComponent(category));
  }, [category, products]);

  return (
    <div className="flex flex-col w-full min-h-screen justify-start items-center mt-28">
      <span className="text-2xl font-bold capitalize">
        {category ? category : "Todos os produtos"}
      </span>

      <div className="flex flex-wrap w-320 gap-12 py-12">
        {filtered.map((product) => (
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
