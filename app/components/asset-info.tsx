"use client";

import React, { useState } from "react";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { assetsOptions, assetOptions } from "@/app/api/assets";
import { formatTimestamp } from "@/app/util/time";

export function AssetInfo() {
  const { data: assetsData } = useSuspenseQuery(assetsOptions);
  const [selectedAsset, setSelectedAsset] = useState(assetsData.data.at(0)?.id);
  const { data: assetData } = useQuery(assetOptions(selectedAsset));

  return (
    <div>
      <h1 className="font-bold text-xl mb-3">Price of one hope</h1>

      <select
        value={selectedAsset} onChange={(e) => setSelectedAsset(e.target.value)}
        className="bg-slate-800 text-white rounded-md p-2 mb-4"
      >
        {assetsData.data.map((asset) => (
          <option key={asset.id} value={asset.id}>
            {asset.symbol}
          </option>
        ))}
      </select>

      {
        assetData !== undefined && (<>
          <p>${assetData.data.priceUsd}</p>
          <p className="italic text-gray-300">Price from: {formatTimestamp(assetData.timestamp)}</p>
        </>
        )
      }
    </div>
  );
}
