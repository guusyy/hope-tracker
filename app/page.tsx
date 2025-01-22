import { getQueryClient } from "@/util/get-query-client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { assetsOptions } from "@/queries/assets";
import { AssetList } from "@/app/components/asset-list";

export default async function Home() {
  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(assetsOptions)

  return (
    <div className="grid grid-rows-[1fr_20px] min-h-screen py-10 container mx-auto">
      <main className="flex flex-col gap-8 items-center">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <AssetList />
        </HydrationBoundary>
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
