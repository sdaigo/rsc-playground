import fs from "node:fs/promises";
import path from "node:path";
import { unstable_cache as cache } from "next/cache";
import type { Product } from "../domain";

export const TAG_PRODUCTS = "products";

const getDataSource = async () => {
  return await fs.readFile(path.join(process.cwd(), "tmp", "products.json"));
};

/**
 * dummy function: simulate query all products from DB
 */
async function findProducts(count?: number): Promise<Product[]> {
  const data = await getDataSource();
  const products = JSON.parse(data.toString());

  return count ? products.slice(0, count) : products;
}

async function findProduct(id: string): Promise<Product | undefined> {
  const data = await getDataSource();
  const products: Product[] = JSON.parse(data.toString());

  return products.find(x => x.id === id);
}

/**
 * The `unstable_cache` function has a `tags` argument that can be used to
 * revalidate a database query.
 * that is potentially used on multiple page,
 * in one call instead of revalidating each page
 */
export const getProducts = cache(findProducts, [], { tags: [TAG_PRODUCTS] });

export const getProductsN = cache((n?: number) => findProducts(n), [], { tags: [TAG_PRODUCTS] });

export const getProduct = cache((id: string) => findProduct(id), [], { tags: [TAG_PRODUCTS] });
