"use server";

import fs from "node:fs/promises";
import path from "node:path";
import { nanoid } from "nanoid";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";
import type { Product } from "../domain";
import { TAG_PRODUCTS } from "./fetcher";

const getDataSource = async () => {
  return await fs.readFile(path.join(process.cwd(), "tmp", "products.json"));
};

const writeDataSource = async (products: Product[]) => {
  return await fs.writeFile(
    path.join(process.cwd(), "tmp", "products.json"),
    JSON.stringify(products, null, 2),
  );
};

/**
 * dummy function: simulate create products to DB
 */
async function createProduct(input: Omit<Product, "id">): Promise<Product> {
  const data = await getDataSource();
  const products: Product[] = JSON.parse(data.toString());

  const product = {
    id: nanoid(),
    ...input,
  } as Product;

  const newProducts = products.concat(product);
  await writeDataSource(newProducts);

  return product;
}

const schema = z.object({
  name: z.string(),
  price: z.coerce.number().positive().int(),
});

/**
 * Server Action: Create a new product
 **/
export default async function create(_prevState: { errors: z.ZodIssue[] }, fd: FormData) {
  const inputs = Object.fromEntries(fd);
  const parsed = schema.safeParse(inputs);

  if (!parsed.success) {
    return {
      errors: parsed.error.issues,
    };
  }

  await createProduct(parsed.data);

  revalidateTag(TAG_PRODUCTS);
  redirect("/products");
}
