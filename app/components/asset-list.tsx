"use client";

import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { assetsOptions } from "@/queries/assets";
import Link from "next/link";
import { AssetLogo } from "./asset-logo";
import { useFilteredAssets } from "@/hooks/assets";

export function AssetList() {
  const { data: assetsData } = useSuspenseQuery(assetsOptions);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredAssets = useFilteredAssets(assetsData.data, searchTerm);

  return (
    <div className="text-center">
      <h1 className="font-bold text-xl mb-3">Select an asset</h1>

      <form className="mb-3" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an asset"
          className="w-full p-2 rounded-lg text-black"
        />
      </form>

      {filteredAssets.length === 0 ? (
        <div className="text-center text-gray-400">No assets found</div>
      ) : (
        <ul className="grid gap-2">
          {filteredAssets.map((asset) => (
            <li key={asset.id}>
              <Link
                href={`/${asset.id}`}
                className="flex gap-2 py-2 px-4 rounded-lg bg-slate-800 hover:bg-gray-700"
              >
                <AssetLogo className="w-7 h-7" asset={asset} />
                <span>
                  {asset.symbol} - {asset.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
