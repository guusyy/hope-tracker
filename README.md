## Getting Started

To set up the project and run the development server, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/guusyy/hope-tracker.git
   cd hope-tracker
   ```

2. **Install Dependencies**:
   Use one of the following commands to install the required packages:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the Development Server**:
   After installing the dependencies, start the development server with:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open the Application**:
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

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