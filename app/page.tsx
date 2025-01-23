import { getQueryClient } from "@/util/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { assetsOptions } from "@/queries/assets";
import { AssetList } from "@/app/components/asset-list";

export default async function Home() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(assetsOptions)

  return (
    <div className="grid grid-rows-[80px_1fr_20px] min-h-screen py-10 max-w-3xl mx-auto px-5">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl text-center font-medium text-amber-50">Hope tracker</h1>
      </header>

      <main>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <AssetList />
        </HydrationBoundary>
      </main>

      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
