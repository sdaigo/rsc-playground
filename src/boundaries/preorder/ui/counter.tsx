"use client";

import useSWR from "swr";

async function fetcher(url: string) {
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await res.json();
  return data;
}

export default function Counter({ initialCount }: { initialCount: number }) {
  const { data } = useSWR("/api/preorder/count", fetcher, {
    fallbackData: { count: initialCount },
    refreshInterval: 2000,
  });

  const count = data?.count || initialCount;

  return (
    <div>
      <span className="font-text-xl font-bold">{count}</span> customers preordered.
    </div>
  );
}
