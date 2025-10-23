import { useTheme } from "styled-components/native";
import { formatTransactionDate } from "../../../utils/formatDate";
import { calculateMonthlyFinances } from "../../../utils/calculateMonthlyFinances";
import { transformChartData } from "../../../utils/transformChartData";
import { getAccountBalances } from "../../../utils/calculateAccountBalance";
import { getRecentTransactions } from "../../../utils/getRecentTransactions";
import { categories } from "../../../mock/categories";
import { useCurrency } from "../../../contexts/CurrencyContext";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useMemo } from "react";
import { HomeHeader } from "../../../components/Header/Home";
import { InfoCard } from "../../../components/common/InfoCard";
import { IncomeExpenseChart } from "../../../components/Chart/IncomeExpense";
import { HomeContainer, SectionContainer, SectionTitle } from "./styled";

export function Home() {
  const theme = useTheme();
  const { currency } = useCurrency();

  const accounts = useMemo(() => getAccountBalances(), []);

  const monthlyFinances = useMemo(
    () => calculateMonthlyFinances(currency),
    [currency]
  );

  const chartData = useMemo(
    () => transformChartData(monthlyFinances),
    [monthlyFinances]
  );

  const recentTransactions = getRecentTransactions();

  const maxTransactionValue = useMemo(() => {
    return Math.max(
      ...monthlyFinances.map((item) => Math.max(item.income, item.expense))
    );
  }, [monthlyFinances]);

  return (
    <HomeContainer>
      <HomeHeader />

      <SectionContainer>
        <SectionTitle>Accounts</SectionTitle>
        {accounts.map((account) => (
          <InfoCard
            key={account.id}
            title={account.name}
            complement={account.accountNumber}
            value={`${account.balance < 0 ? "-" : ""}${formatCurrency(
              Math.abs(account.balance),
              currency
            )}`}
            icon={account.icon}
            iconColor={account.iconColor}
            iconBg={account.iconBg}
            valueColor={theme.colors.primaryText}
          />
        ))}
      </SectionContainer>

      <IncomeExpenseChart
        data={chartData}
        maxValue={maxTransactionValue}
        title="Income vs Expenses"
        periodLabel="This M..."
      />

      <SectionContainer>
        <SectionTitle>Recent Transactions</SectionTitle>

        {recentTransactions.map((transaction) => {
          const category = categories.find(
            (c) => c.id === transaction.categoryId
          );

          if (!category) return null;

          const isIncome = category.type === "income";

          return (
            <InfoCard
              key={transaction.id}
              title={transaction.description}
              complement={formatTransactionDate(transaction.date)}
              value={`${isIncome ? "+" : "-"}${formatCurrency(
                Math.abs(transaction.amount),
                currency
              )}`}
              icon={category.icon}
              iconColor={category.iconColor}
              iconBg={category.iconBg}
              valueColor={isIncome ? "#16A34A" : "#DC2626"}
            />
          );
        })}
      </SectionContainer>
    </HomeContainer>
  );
}
