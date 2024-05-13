"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import create from "../actions/create";

export default function CMS() {
  const [state, action, pending] = useActionState(create, { errors: [] });

  console.log(state.errors);

  return (
    <section className="w-1/3 mx-auto my-8">
      <form action={action} className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Product Name</Label>
          <Input type="text" id="name" name="name" placeholder="product name" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="price">Price</Label>
          <Input type="number" id="price" name="price" placeholder="price of product" required />
        </div>
        <Button type="submit" variant="default" disabled={pending}>
          Add
        </Button>
      </form>
    </section>
  );
}
