"use server";

import fs from "node:fs/promises";
import path from "node:path";
import { revalidateTag } from "next/cache";
import { z } from "zod";
import type { Preorder } from "../domain";
import { TAG_PREORDERS_COUNT } from "./fetcher";

const getDataSource = async () => {
  return await fs.readFile(path.join(process.cwd(), "tmp", "preorders.json"));
};

const writeDataSource = async (preorders: Preorder[]) => {
  return await fs.writeFile(
    path.join(process.cwd(), "tmp", "preorders.json"),
    JSON.stringify(preorders, null, 2),
  );
};

/**
 * dummy function: simulate create preorder to DB
 */
async function createPreorder(input: Preorder): Promise<void> {
  const data = await getDataSource();
  const preorders: Preorder[] = JSON.parse(data.toString());

  const newPreorders = preorders.concat(input);
  await writeDataSource(newPreorders);
}

const schema = z.object({
  email: z.string().email(),
});

export default async function create(fd: FormData) {
  const inputs = Object.fromEntries(fd);
  const parsed = schema.safeParse(inputs);

  if (!parsed.success) {
    return {
      errors: parsed.error.issues,
    };
  }

  await createPreorder(parsed.data);

  revalidateTag(TAG_PREORDERS_COUNT);
}
