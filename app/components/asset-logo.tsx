import { AssetData } from "@/types/types";
import Image from "next/image";

export function AssetLogo({ asset, className }: { asset: AssetData, className?: string }) {
  return (
    <Image className={className} src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`} alt={asset.symbol} width="64" height="64" />
  );
}