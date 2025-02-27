"use client"

import { TrendingDown, TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { AssetData, AssetHistoryChartPoint } from "@/types/types"
import { assetHistory } from "@/queries/assets"
import { useQuery } from "@tanstack/react-query"
import { useAssetChartHistory } from "@/hooks/assets"
import { chartConfig } from "@/lib/chart-config"

export function AssetHistoryChart({ asset }: { asset: AssetData }) {
  const { data: assetHistoryData, isLoading } = useQuery(assetHistory(asset.id));
  const historyData = useAssetChartHistory(assetHistoryData?.data || []);

  return (
    <Card className="my-5">
      <CardContent>
        {isLoading && <div className="grid place-items-center aspect-video">Loading...</div>}
        {!isLoading && assetHistoryData === undefined && <div>Asset not found...</div>}
        {assetHistoryData && <AssetHistoryChartContent historyData={historyData} />}
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm pl-10">
        <TrendInfo trend={asset.changePercent24Hr} />
        <div className="leading-none text-muted-foreground">
          Showing price history of last 12 months
        </div>
      </CardFooter>
    </Card>
  );
}

function AssetHistoryChartContent({ historyData }: { historyData: AssetHistoryChartPoint[] }) {
  const max = Math.max(...historyData.map((point) => Number(point.value)));
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={historyData}
        margin={{
          top: 40,
          left: 24,
          right: 10,
        }}
      >
        <CartesianGrid vertical={false} />
        <YAxis
          orientation="right"
          domain={[0, (max * 1.1)]}
          stroke="transparent"
        />
        <XAxis
          dataKey="day"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => {
            return value.toLocaleDateString("en-US", {
              month: "short",
            })
          }}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Line
          dataKey="value"
          type="linear"
          stroke="#ea580c"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  );
}

function TrendInfo({ trend }: { trend: string }) {
  const numberTrend = Number(trend);
  const positive = Number(trend) > 0;
  return (
    <div className="flex gap-2 font-medium leading-none">
      Trending {positive ? "up" : "down"} by {numberTrend.toFixed(2)}% today
      {
        positive
          ? <TrendingUp className="h-4 w-4 text-green-500" />
          : <TrendingDown className="h-4 w-4 text-red-500" />
      }
    </div>
  )
}