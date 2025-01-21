"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { assetOptions } from "@/app/api/assets";
import { formatTimestamp } from "@/app/util/time";

export function AssetInfo() {
  const { data: assetData } = useSuspenseQuery(assetOptions);

  return (
    <div>
      <h1 className="font-bold text-xl mb-3">Price of one hope</h1>
      <p>${parseInt(assetData.data.priceUsd).toFixed(2)}</p>
      <p className="italic text-gray-300">Price from: {formatTimestamp(assetData.timestamp)}</p>
    </div>
  );
}
