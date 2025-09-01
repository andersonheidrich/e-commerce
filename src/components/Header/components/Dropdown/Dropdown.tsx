"use client";

import { useEffect } from "react";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { Button } from "@/components";

const Dropdown = () => {
  const { categories, fetchCategories } = useStore();
  const router = useRouter();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className="relative group">
      <Button className="cursor-pointer px-2">Produtos ▾</Button>
      <ul className="w-40 absolute hidden group-hover:block bg-white shadow-lg rounded p-2 justify-center">
        <li
          className="py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => router.push("/produtos")}
        >
          Todos
        </li>
        {categories.map((cat) => (
          <li
            key={cat}
            className="py-2 hover:bg-gray-100 cursor-pointer capitalize"
            onClick={() =>
              router.push(`/produtos?category=${encodeURIComponent(cat)}`)
            }
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
