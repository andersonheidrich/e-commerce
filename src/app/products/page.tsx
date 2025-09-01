import { ProductList } from "@/features/product/components";
import { Suspense } from "react";

export default function ProductsPage() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <Suspense
        fallback={<p className="text-center mt-20">Carregando produtos...</p>}
      >
        <ProductList />
      </Suspense>
    </div>
  );
}
