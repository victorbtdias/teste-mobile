import { MonthlyFinance } from "./calculateMonthlyFinances";

export interface ChartItem {
  value: number;
  label?: string;
  labelWidth?: number;
  frontColor: string;
  spacing?: number;
}

export function transformChartData(data: MonthlyFinance[]): ChartItem[] {
  const chartData: ChartItem[] = [];

  data.forEach((item) => {
    chartData.push({
      value: item.income / 1000,
      label: item.month,
      labelWidth: 26,
      frontColor: "#10B981",
      spacing: 4,
    });
    chartData.push({
      value: item.expense / 1000,
      frontColor: "#EF4444",
    });
  });

  return chartData;
}
