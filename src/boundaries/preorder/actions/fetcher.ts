import fs from "node:fs/promises";
import path from "node:path";
import { unstable_cache as cache } from "next/cache";

export const TAG_PREORDERS_COUNT = "preorders_count";

const getDataSource = async () => {
  return await fs.readFile(path.join(process.cwd(), "tmp", "preorders.json"));
};

/**
 * dummy function: simulate query preorder count from DB
 */
async function findPreordersCount(): Promise<number> {
  const data = await getDataSource();
  const preorders = JSON.parse(data.toString());

  return preorders.length;
}

export const getPreordersCount = cache(findPreordersCount, [], {
  tags: [TAG_PREORDERS_COUNT],
});
