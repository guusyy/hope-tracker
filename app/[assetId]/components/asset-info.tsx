"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { assetOptions } from "@/queries/assets";
import { formatTimestamp } from "@/util/time";
import { AssetLogo } from "@/app/components/asset-logo";

export function AssetInfo({ assetId }: { assetId: string }) {
  const { data: assetData, isLoading } = useQuery(assetOptions(assetId));

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (assetData === undefined) {
    return <div>Asset not found...</div>
  }

  return (
    <div>
      <AssetLogo asset={assetData.data} className="w-16 h-16" />
      <h1 className="font-bold text-xl mb-3">Price of one {assetData?.data?.name}</h1>
      <p>${assetData.data.priceUsd}</p>
      <p className="italic text-gray-300">Price from: {formatTimestamp(assetData.timestamp)}</p>
    </div>
  );
}
