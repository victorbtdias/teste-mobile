import { useTheme } from "styled-components/native";
import { formatTransactionDate } from "../../../utils/formatDate";
import { calculateMonthlyFinances } from "../../../utils/calculateMonthlyFinances";
import { transformChartData } from "../../../utils/transformChartData";
import { getAccountBalances } from "../../../utils/calculateAccountBalance";
import { getRecentTransactions } from "../../../utils/getRecentTransactions";
import { useCurrency } from "../../../contexts/CurrencyContext";
import { formatCurrency } from "../../../utils/formatCurrency";
import { useMemo, useState } from "react";
import { HomeHeader } from "../../../components/Header/Home";
import { InfoCard } from "../../../components/common/InfoCard";
import { IncomeExpenseChart } from "../../../components/Chart/IncomeExpense";
import { HomeContainer, SectionContainer, SectionTitle } from "./styled";
import { useData } from "../../../hooks/useData";
import Loader from "../../../components/common/Loader";
import NotFound from "../../../components/common/NotFound";
import { RefreshControl } from "react-native";

export function Home() {
  const theme = useTheme();
  const { currency } = useCurrency();
  const { accounts, transactions, categories, loading, reload } = useData();

  const [refreshing, setRefreshing] = useState(false);

  const accountsData = useMemo(
    () => getAccountBalances(accounts, transactions, categories),
    [accounts, transactions, categories]
  );

  const monthlyFinances = useMemo(
    () => calculateMonthlyFinances(transactions, categories, currency),
    [transactions, categories, currency]
  );

  const chartData = useMemo(
    () => transformChartData(monthlyFinances),
    [monthlyFinances]
  );

  const recentTransactions = getRecentTransactions(transactions);

  const maxTransactionValue = useMemo(() => {
    return Math.max(
      ...monthlyFinances.map((item) => Math.max(item.income, item.expense))
    );
  }, [monthlyFinances]);

  if (loading) {
    return <Loader />;
  }

  return (
    <HomeContainer
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={async () => {
            setRefreshing(true);
            await reload();
            setRefreshing(false);
          }}
        />
      }
    >
      <HomeHeader />

      <SectionContainer>
        <SectionTitle>Accounts</SectionTitle>

        {accountsData.length > 0 ? (
          accountsData.map((account) => (
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
          ))
        ) : (
          <NotFound text="No accounts found" />
        )}
      </SectionContainer>

      {transactions.length > 0 && (
        <IncomeExpenseChart
          data={chartData}
          maxValue={maxTransactionValue}
          title="Income vs Expenses"
          periodLabel="This M..."
        />
      )}

      <SectionContainer>
        <SectionTitle>Recent Transactions</SectionTitle>

        {recentTransactions.length > 0 ? (
          recentTransactions.map((transaction) => {
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
          })
        ) : (
          <NotFound text="No transactions found" />
        )}
      </SectionContainer>
    </HomeContainer>
  );
}
