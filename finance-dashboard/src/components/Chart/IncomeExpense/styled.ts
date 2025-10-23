import styled, { DefaultTheme } from "styled-components/native";

interface LegendDotProps {
  color: string;
}

export const ChartContainer = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  margin: 0 24px 24px;
  padding: 21px;
  border: 1px ${({ theme }: { theme: DefaultTheme }) => theme.colors.border};
  border-radius: 12px;
  shadow-color: #0000000d;
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 2;
`;

export const ChartHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const ChartTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
`;

export const PeriodSelector = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

export const PeriodText = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondaryText};
`;

export const ChartContent = styled.View`
  padding-left: 10px;
`;

export const Legend = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
`;

export const LegendItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const LegendDot = styled.View<LegendDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ color }: LegendDotProps) => color};
`;

export const LegendText = styled.Text`
  font-size: 12px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondaryText};
`;
