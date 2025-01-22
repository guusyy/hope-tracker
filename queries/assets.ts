import {
  AssetsResponse,
  AssetResponse,
  AssetHistoryResponse,
} from "@/types/types";
import { queryOptions } from "@tanstack/react-query";

export const assetsOptions = queryOptions<AssetsResponse>({
  queryKey: ["assets"],
  queryFn: async () => {
    const response = await fetch("https://api.coincap.io/v2/assets");
    return response.json();
  },
});

export const assetOptions = (assetId?: string) => {
  return queryOptions<AssetResponse>({
    queryKey: ["details", assetId],
    queryFn: async () => {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${assetId}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch asset");
      }
      return response.json();
    },
    refetchInterval: 1000 * 10,
    enabled: !!assetId,
  });
};

export const assetHistory = (assetId?: string) => {
  return queryOptions<AssetHistoryResponse>({
    queryKey: ["history", assetId],
    queryFn: async () => {
      const response = await fetch(
        `https://api.coincap.io/v2/assets/${assetId}/history?interval=d1`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch asset history");
      }
      return response.json();
    },
    enabled: !!assetId,
  });
};
