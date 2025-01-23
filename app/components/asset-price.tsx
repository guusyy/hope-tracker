import { AssetData } from "@/types/types";
import { logicalRound } from "@/util/price";

export function AssetPrice({ asset, className }: { asset: AssetData, className?: string }) {
  const price = logicalRound(asset.priceUsd);
  return (
    <span className={`${className}`}>
      ${price}
    </span>
  );
}