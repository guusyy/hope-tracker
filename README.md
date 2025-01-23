## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Used apis
Here's a completed section for "Used APIs" based on the provided code:

## Used APIs

This application utilizes the CoinCap API to fetch cryptocurrency data. The following endpoints are used:

1. **Assets Endpoint**
   - **Description**: Retrieves a list of all available assets.
   - **API Call**: 
     ```javascript
     const response = await fetch("https://api.coincap.io/v2/assets");
     ```
   - **Response Type**: `AssetsResponse`
   - **Query Key**: `["assets"]`

2. **Asset Details Endpoint**
   - **Description**: Fetches detailed information about a specific asset using its ID.
   - **API Call**: 
     ```javascript
     const response = await fetch(`https://api.coincap.io/v2/assets/${assetId}`);
     ```
   - **Response Type**: `AssetResponse`
   - **Query Key**: `["details", assetId]`
   - **Refetch Interval**: 10 seconds (10000 milliseconds)
   - **Enabled**: Only fetches if `assetId` is provided.

3. **Asset History Endpoint**
   - **Description**: Retrieves historical data for a specific asset over a daily interval.
   - **API Call**: 
     ```javascript
     const response = await fetch(`https://api.coincap.io/v2/assets/${assetId}/history?interval=d1`);
     ```
   - **Response Type**: `AssetHistoryResponse`
   - **Query Key**: `["history", assetId]`
   - **Enabled**: Only fetches if `assetId` is provided.

These APIs provide the necessary data to display asset information and historical trends within the application.