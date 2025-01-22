export type CoinCapResponse<T> = {
  data: T;
  timestamp: number;
};

export type AssetData = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
};

export type AssetHistory = {
  priceUsd: string;
  time: number;
};

export type AssetResponse = CoinCapResponse<AssetData>;

export type AssetsResponse = CoinCapResponse<AssetData[]>;

export type AssetHistoryResponse = CoinCapResponse<AssetHistory[]>;

export type AssetHistoryChartPoint = {
  day: string;
  value: string;
};
