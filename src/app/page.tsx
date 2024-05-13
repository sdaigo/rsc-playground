import Flagship from "@/boundaries/products/ui/flagship";
import ProductList from "@/boundaries/products/ui/list";
import Link from "next/link";

export default async function Page() {
  return (
    <div className="flex flex-col gap-8">
      <section>
        <h2 className="font-bold text-xl">Coming up</h2>
        <Flagship />
      </section>
      <section>
        <h2 className="font-bold text-xl">Products</h2>
        <ProductList items={4} />
        <div>
          <Link href="/products">View all products</Link>
        </div>
      </section>
    </div>
  );
}
