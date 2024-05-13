import Awaiter from "@/components/awaiter";
import Spinner from "@/components/spinner";
import { Suspense } from "react";
import { getProductsN } from "../actions/fetcher";
import Item from "./item";

export default function ProductList({ items = 0 }: { items?: number }) {
  return (
    <Suspense fallback={<Spinner />}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        <Awaiter promise={getProductsN(items)}>
          {xs => xs.map(x => <Item key={x.id} product={x} />)}
        </Awaiter>
      </div>
    </Suspense>
  );
}
