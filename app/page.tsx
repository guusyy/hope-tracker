import { getQueryClient } from "./util/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { assetOptions } from "./api/assets";
import { AssetInfo } from "./components/asset-info";

export default function Home() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(assetOptions)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <AssetInfo />
        </HydrationBoundary>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
