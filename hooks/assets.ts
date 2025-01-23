import { AssetData, AssetHistory } from "@/types/types";
import { logicalRound } from "@/util/price";
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

export function useAssetChartHistory(historyData: AssetHistory[]) {
  return useMemo(() => {
    return historyData.map((history) => {
      return {
        day: new Date(history.time),
        value: logicalRound(history.priceUsd),
      };
    });
  }, [historyData]);
}
