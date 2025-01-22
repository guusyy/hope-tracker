import { AssetData } from "@/types/types";
import Image from "next/image";

export function AssetLogo({ asset, classes }: { asset: AssetData, classes?: string }) {
  return (
    <Image className={classes} src={`https://assets.coincap.io/assets/icons/${asset.symbol.toLowerCase()}@2x.png`} alt={asset.symbol} width="64" height="64" />
  );
}