"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSWRConfig } from "swr";
import create from "../actions/create";

export default function Form() {
  const { mutate } = useSWRConfig();

  const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault();

    await create(new FormData(ev.target as HTMLFormElement));
    mutate("/api/preorder/count");
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className="flex flex-col gap-4">
        <Input name="email" type="email" placeholder="you@example.com" required />
        <Button type="submit">Preorder Now</Button>
      </div>
    </form>
  );
}
