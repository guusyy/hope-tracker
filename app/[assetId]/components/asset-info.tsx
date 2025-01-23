"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { assetOptions } from "@/queries/assets";
import { formatTimestamp } from "@/util/time";
import { AssetLogo } from "@/app/components/asset-logo";
import { AssetHistoryChart } from "./asset-history-chart";
import { AssetPrice } from "@/app/components/asset-price";
import { Spinner } from "@/components/ui/spinner";
import { useLoaderWithMinimumTime } from "@/hooks/common";

export function AssetInfo({ assetId }: { assetId: string }) {
  const { data: assetData, isLoading, isFetching } = useQuery(assetOptions(assetId));
  const loaderVisible = useLoaderWithMinimumTime(isFetching, 1000);

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (assetData === undefined) {
    return <div>Asset not found...</div>
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-5">
        <AssetLogo asset={assetData.data} className="w-16 h-16" />

        <div>
          <h1 className="font-bold text-xl">{assetData?.data?.name}</h1>
          <div className="flex gap-1">
            <AssetPrice className="text-lg" asset={assetData.data} />
            {loaderVisible && <Spinner size="small" />}
          </div>
          <p className="italic text-gray-300 text-xs">Last price update from: {formatTimestamp(assetData.timestamp)}</p>
        </div>
      </div>

      <div className="aspect-[760/488] w-full">
        <AssetHistoryChart asset={assetData.data} />
      </div>
    </div>
  );
}
