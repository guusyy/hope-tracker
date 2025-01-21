import { AssetResponse } from "@/types/types";
import { queryOptions } from "@tanstack/react-query";

export const assetOptions = queryOptions<AssetResponse>({
  queryKey: ["bitcoin"],
  queryFn: async () => {
    const response = await fetch("https://api.coincap.io/v2/assets/bitcoin");
    return response.json();
  },
  refetchInterval: 1000 * 10,
});
