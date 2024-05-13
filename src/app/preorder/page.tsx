/**
 * This page is intentionally use client-side data fetching with SWR
 * to get updated data without a refresh
 */

import { getPreordersCount } from "@/boundaries/preorder/actions/fetcher";
import Counter from "@/boundaries/preorder/ui/counter";
import Form from "@/boundaries/preorder/ui/form";

export default async function Page() {
  // initial count
  const preorders = await getPreordersCount();

  return (
    <section className="w-1/3 mx-auto my-20">
      <div className="mb-8 flex justify-center">
        <Counter initialCount={preorders} />
      </div>
      <Form />
    </section>
  );
}
