import { AssetInfo } from "@/app/[assetId]/components/asset-info";

export default async function AssetDetail({
  params,
}: {
  params: Promise<{ assetId: string }>
}) {
  const { assetId } = await params;

  return (
    <main className="grid items-center justify-items-center min-h-screen py-10 max-w-3xl mx-auto px-5">
      <AssetInfo assetId={assetId} />
    </main>
  );
}
