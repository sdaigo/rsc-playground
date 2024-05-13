import { getProduct } from "@/boundaries/products/actions/fetcher";
import Drawer from "@/boundaries/products/ui/drawer";
import Item from "@/boundaries/products/ui/item";
import Awaiter from "@/components/awaiter";
import Spinner from "@/components/spinner";
import { Suspense } from "react";

export default async function ProductDrawer({ params }: { params: { id: string } }) {
  return (
    <Drawer>
      <Suspense
        fallback={
          <div className="flex items-center justify-center h-80">
            <Spinner />
          </div>
        }
      >
        <Awaiter promise={getProduct(params.id)}>
          {product => (product ? <Item product={product} /> : <p>not found</p>)}
        </Awaiter>
      </Suspense>
    </Drawer>
  );
}
