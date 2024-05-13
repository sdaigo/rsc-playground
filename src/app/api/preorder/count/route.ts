import { getPreordersCount } from "@/boundaries/preorder/actions/count";
import { NextResponse } from "next/server";

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    count: await getPreordersCount(),
  });
}
