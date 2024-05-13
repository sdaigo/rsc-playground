import Image from "next/image";
import Link from "next/link";
import type { Product } from "../domain";

export default function Item({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="p-6">
        <Image
          className="rounded-xl"
          src="/placeholder.png"
          alt={product.name}
          width={200}
          height={200}
        />
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-gray-700">${product.price}</p>
      </div>
    </Link>
  );
}
