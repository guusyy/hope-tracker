import { AssetData } from "@/types/types";
import { useMemo } from "react";

export function useFilteredAssets(assets: AssetData[], searchTerm: string) {
  return useMemo(() => {
    if (searchTerm === "") {
      return assets;
    }

    return assets.filter((asset) => {
      return (
        asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
        asset.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [searchTerm, assets]);
}
