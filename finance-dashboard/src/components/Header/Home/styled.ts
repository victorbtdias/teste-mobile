import { LinearGradient } from "expo-linear-gradient";
import styled, { DefaultTheme } from "styled-components/native";

export const HomeHeaderContainer = styled(LinearGradient).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    colors: [theme.colors.primary, theme.colors.gradient],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 },
  })
)`
  padding: 10px 24px 30px 24px;
  margin-bottom: 24px;
`;

export const GreetingText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const UserName = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightText};
  margin-bottom: 24px;
`;

export const BalanceCard = styled.View`
  background-color: #ffffff33;
  border-radius: 16px;
  padding: 20px;
  height: 136px;
`;

export const BalanceTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const BalanceLabel = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightText};
`;

export const BalanceAmount = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
`;

export const GrowthContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const GrowthText = styled.Text`
  font-size: 14px;
  color: #86efac;
  margin-left: 4px;
`;
