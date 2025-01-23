"use client";

import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { assetsOptions } from "@/queries/assets";
import Link from "next/link";
import { AssetLogo } from "./asset-logo";
import { useFilteredAssets } from "@/hooks/assets";
import { Input } from "@/components/ui/input";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useDebounce } from "@/hooks/common";
import { AssetPrice } from "./asset-price";

export function AssetList() {
  const { data: assetsData } = useSuspenseQuery(assetsOptions);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const filteredAssets = useFilteredAssets(assetsData.data, debouncedSearchTerm);
  const [parent] = useAutoAnimate()

  return (
    <section>
      <form
        className="mb-3"
        onSubmit={(e) => e.preventDefault()}
      >
        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for an asset..."
        />
      </form>

      {filteredAssets.length === 0 ? (
        <div className="text-center text-gray-400">No assets found</div>
      ) : (
        <ul className="grid gap-2" ref={parent}>
          {filteredAssets.map((asset) => (
            <li key={asset.id}>
              <Link
                href={`/${asset.id}`}
                className="flex gap-2 py-2 px-4 rounded-lg bg-amber-950 hover:bg-amber-900/60 duration-300"
              >
                <AssetLogo className="w-7 h-7" asset={asset} />
                <span>{asset.name}</span>
                <span className="text-amber-600/70">{asset.symbol}</span>
                <AssetPrice
                  asset={asset}
                  className="text-right flex-grow"
                />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
