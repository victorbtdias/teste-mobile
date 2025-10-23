import { useTheme } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { BarChart } from "react-native-gifted-charts";
import { memo } from "react";
import { Dimensions } from "react-native";
import {
  ChartContainer,
  ChartContent,
  ChartHeader,
  ChartTitle,
  Legend,
  LegendDot,
  LegendItem,
  LegendText,
  PeriodSelector,
  PeriodText,
} from "./styled";
import { ChartItem } from "../../../utils/transformChartData";

const screenWidth = Dimensions.get("window").width;

interface ChartProps {
  data: ChartItem[];
  maxValue: number;
  title?: string;
  periodLabel?: string;
}

export const IncomeExpenseChart = memo(function IncomeExpenseChart({
  data,
  maxValue,
  title,
  periodLabel,
}: ChartProps) {
  const theme = useTheme();

  return (
    <ChartContainer>
      <ChartHeader>
        <ChartTitle>{title}</ChartTitle>
        <PeriodSelector>
          <PeriodText>{periodLabel}</PeriodText>
          <Feather
            name="chevron-down"
            size={16}
            color={theme.colors.secondaryText}
          />
        </PeriodSelector>
      </ChartHeader>

      <ChartContent>
        <BarChart
          data={data}
          barWidth={12}
          spacing={14}
          roundedTop
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{ color: theme.colors.secondaryText, fontSize: 12 }}
          xAxisLabelTextStyle={{
            color: theme.colors.secondaryText,
            fontSize: 12,
          }}
          noOfSections={2}
          maxValue={Math.ceil(maxValue / 1000)}
          yAxisLabelSuffix="k"
          width={screenWidth * 0.63}
          height={120}
          backgroundColor={theme.colors.card}
          showGradient={false}
          isAnimated
          showFractionalValues
          rulesType="solid"
          rulesColor="#bcc0c85c"
          rulesThickness={1}
          initialSpacing={10}
          endSpacing={10}
        />
      </ChartContent>

      <Legend>
        <LegendItem>
          <LegendDot color="#10B981" />
          <LegendText>Income</LegendText>
        </LegendItem>
        <LegendItem>
          <LegendDot color="#EF4444" />
          <LegendText>Expenses</LegendText>
        </LegendItem>
      </Legend>
    </ChartContainer>
  );
});
