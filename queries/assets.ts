import { AssetsResponse, AssetResponse } from "@/types/types";
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
    queryKey: [assetId],
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
