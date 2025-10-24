import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useMemo } from "react";
import { useValuesVisibility } from "../../../contexts/ValuesVisibilityContext";
import { useCurrency } from "../../../contexts/CurrencyContext";
import { getTotalBalance } from "../../../utils/calculateAccountBalance";
import { calculateBalanceGrowth } from "../../../utils/calculateBalanceGrowth";
import { getGreeting } from "../../../utils/getGreeting";
import { formatCurrency } from "../../../utils/formatCurrency";
import {
  BalanceAmount,
  BalanceCard,
  BalanceLabel,
  BalanceTop,
  GreetingText,
  GrowthContainer,
  GrowthText,
  HomeHeaderContainer,
  UserName,
} from "./styled";
import { useData } from "../../../hooks/useData";

export function HomeHeader() {
  const theme = useTheme();
  const { showValues, toggleValuesVisibility } = useValuesVisibility();
  const { currency } = useCurrency();
  const { accounts, transactions, categories, user } = useData();

  const totalBalance = useMemo(
    () => getTotalBalance(accounts, transactions, categories),
    [accounts, transactions, categories]
  );

  const growth = useMemo(
    () => calculateBalanceGrowth(transactions),
    [transactions]
  );

  const greeting = getGreeting();

  return (
    <HomeHeaderContainer>
      <GreetingText>{greeting}</GreetingText>
      <UserName>{user?.name}</UserName>
      <BalanceCard>
        <BalanceTop>
          <BalanceLabel>Total Balance</BalanceLabel>
          <Ionicons
            name={showValues ? "eye" : "eye-off"}
            size={20}
            color={theme.colors.lightText}
            onPress={toggleValuesVisibility}
          />
        </BalanceTop>
        <BalanceAmount>
          <BalanceAmount>
            {showValues ? formatCurrency(totalBalance, currency) : "••••••"}
          </BalanceAmount>
        </BalanceAmount>
        <GrowthContainer>
          <Ionicons
            name={
              growth == 0
                ? "remove-sharp"
                : growth > 0
                ? "arrow-up"
                : "arrow-down"
            }
            size={16}
            color={
              growth == 0
                ? theme.colors.lightText
                : growth > 0
                ? "#86efac"
                : "#f87171"
            }
          />
          <GrowthText
            style={{
              color:
                growth == 0
                  ? theme.colors.lightText
                  : growth > 0
                  ? "#86efac"
                  : "#f87171",
            }}
          >
            {growth == 0
              ? "0%"
              : growth > 0
              ? `+${growth.toFixed(1)}%`
              : `${growth.toFixed(1)}%`}{" "}
            from last month
          </GrowthText>
        </GrowthContainer>
      </BalanceCard>
    </HomeHeaderContainer>
  );
}
