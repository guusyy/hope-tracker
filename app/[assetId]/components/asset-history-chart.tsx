"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { AssetData, AssetHistoryChartPoint } from "@/types/types"
import { assetHistory } from "@/queries/assets"
import { useQuery } from "@tanstack/react-query"
import { useAssetChartHistory } from "@/hooks/assets"

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig

export function AssetHistoryChart({ asset }: { asset: AssetData }) {
  const { data: assetHistoryData, isLoading } = useQuery(assetHistory(asset.id));
  const historyData = useAssetChartHistory(assetHistoryData?.data || []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {assetHistoryData === undefined && <div>Asset not found...</div>}
      {assetHistoryData && <AssetHistoryChartContent historyData={historyData} />}
    </div>
  );
}

function AssetHistoryChartContent({ historyData }: { historyData: AssetHistoryChartPoint[] }) {
  return (
    <Card className="my-5">
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-[300px]">
          <LineChart
            accessibilityLayer
            data={historyData}
            margin={{
              left: 24,
              right: 24,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="value"
              type="linear"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}