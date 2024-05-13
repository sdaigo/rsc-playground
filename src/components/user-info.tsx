import { cookies } from "next/headers";
import { Suspense } from "react";
import Spinner from "./spinner";

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUserFromToken(token?: string) {
  // dummy implementation
  await sleep(500);
  return { name: "Jane Doe" };
}

async function UserInfoAsync() {
  const token = cookies().get("token")?.value;
  const user = await getUserFromToken(token);

  return <span>{user.name}</span>;
}

export default function UserInfo() {
  // NOTICE: PPR don't work yet
  return (
    <Suspense fallback={<Spinner />}>
      <UserInfoAsync />
    </Suspense>
  );
}
