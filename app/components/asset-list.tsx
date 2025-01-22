"use client";

import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { assetsOptions } from "@/queries/assets";
import Link from "next/link";

export function AssetList() {
  const { data: assetsData } = useSuspenseQuery(assetsOptions);

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl mb-3">Select an asset</h1>

      <ul className="grid gap-2">
        {
          assetsData.data.map((asset) => (
            <li key={asset.id}>
              <Link href={`/${asset.id}`} className="flex py-2 px-4 rounded-lg bg-slate-800 hover:bg-gray-700">
                {asset.symbol} - {asset.name}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
