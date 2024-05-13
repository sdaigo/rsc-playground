import fs from "node:fs/promises";
import path from "node:path";

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

export async function getPreordersCount() {
  return await findPreordersCount();
}
