import styled, { DefaultTheme, useTheme } from "styled-components/native";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BarChart } from "react-native-gifted-charts";
import { Dimensions } from "react-native";
import { formatTransactionDate } from "../../utils/formatDate";
import { calculateMonthlyFinances } from "../../utils/calculateMonthlyFinances";
import { transformChartData } from "../../utils/transformChartData";
import {
  getTotalBalance,
  getAccountBalances,
} from "../../utils/calculateAccountBalance";
import { getRecentTransactions } from "../../utils/getRecentTransactions";
import { categories } from "../../mock/categories";
import { calculateBalanceGrowth } from "../../utils/calculateBalanceGrowth";
import { getGreeting } from "../../utils/getGreeting";
import { useValuesVisibility } from "../../contexts/ValuesVisibilityContext";
import { useCurrency } from "../../contexts/CurrencyContext";
import { formatCurrency } from "../../utils/formatCurrency";

const screenWidth = Dimensions.get("window").width;

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.secondary};
`;

const HomeHeader = styled(LinearGradient).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    colors: [theme.colors.primary, theme.colors.gradient],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 },
  })
)`
  padding: 10px 24px 30px 24px;
`;

const GreetingText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
`;

const UserName = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightText};
  margin-bottom: 24px;
`;

const BalanceCard = styled.View`
  background-color: #ffffff33;
  border-radius: 16px;
  padding: 20px;
  height: 136px;
`;

const BalanceTop = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const BalanceLabel = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightText};
`;

const BalanceAmount = styled.Text`
  font-size: 30px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;
`;

const GrowthContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const GrowthText = styled.Text`
  font-size: 14px;
  color: #86efac;
  margin-left: 4px;
`;

//Accounts

const AccountsContainer = styled.View`
  padding: 24px;
`;

const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
  margin-bottom: 16px;
`;

const AccountCard = styled.View`
  height: 78px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  padding: 17px;
  border: 1px ${({ theme }: { theme: DefaultTheme }) => theme.colors.border};
  border-radius: 12px;
  margin-bottom: 12px;
  shadow-color: #0000000d;
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 2;
`;

interface IconProps {
  bgColor: string;
}

const IconContainer = styled.View<IconProps>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ bgColor }: IconProps) => bgColor};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const AccountInfo = styled.View`
  flex: 1;
`;

const AccountName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
  margin-bottom: 4px;
`;

const AccountNumber = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondaryText};
`;

const Balance = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
`;

//Chart

const IncomesExpensesContainer = styled.View`
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

const ChartHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const ChartTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
`;

const PeriodSelector = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  gap: 4px;
`;

const PeriodText = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondaryText};
`;

const ChartContainer = styled.View`
  padding-left: 10px;
`;

const Legend = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  margin-top: 16px;
`;

const LegendItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

interface LegendDotProps {
  color: string;
}

const LegendDot = styled.View<LegendDotProps>`
  width: 12px;
  height: 12px;
  border-radius: 6px;
  background-color: ${({ color }: LegendDotProps) => color};
`;

const LegendText = styled.Text`
  font-size: 12px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondaryText};
`;

//Transactions

const TransctionsContainer = styled.View`
  padding: 0 24px;
`;

const TransactionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
  margin-bottom: 16px;
`;

const TransactionCard = styled.View`
  height: 78px;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  padding: 17px;
  border: 1px ${({ theme }: { theme: DefaultTheme }) => theme.colors.border};
  border-radius: 12px;
  margin-bottom: 12px;
  shadow-color: #0000000d;
  shadow-offset: 0px 1px;
  shadow-opacity: 1;
  shadow-radius: 2px;
  elevation: 2;
`;

interface IconProps {
  bgColor: string;
}

const TransactionIconContainer = styled.View<IconProps>`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${({ bgColor }: IconProps) => bgColor};
  align-items: center;
  justify-content: center;
  margin-right: 12px;
`;

const TransactionInfo = styled.View`
  flex: 1;
`;

const TransactionName = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.primaryText};
  margin-bottom: 4px;
`;

const TransactionDate = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.secondaryText};
`;

interface AmountProps {
  color: string;
}

const Amount = styled.Text<AmountProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ color }: AmountProps) => color};
`;

export function Home() {
  const theme = useTheme();
  const { showValues, toggleValuesVisibility } = useValuesVisibility();
  const { currency } = useCurrency();

  const totalBalance = getTotalBalance();
  const accounts = getAccountBalances();
  const monthlyFinances = calculateMonthlyFinances(currency);
  const chartData = transformChartData(monthlyFinances);
  const recentTransactions = getRecentTransactions();
  const growth = calculateBalanceGrowth();
  const greeting = getGreeting();

  const maxTransactionValue = Math.max(
    ...monthlyFinances.map((item) => Math.max(item.income, item.expense))
  );

  return (
    <Container>
      <HomeHeader>
        <GreetingText>{greeting}</GreetingText>
        <UserName>Sarah Johnson</UserName>
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
      </HomeHeader>

      <AccountsContainer>
        <Title>Accounts</Title>
        {accounts.map((account) => (
          <AccountCard key={account.id}>
            <IconContainer bgColor={account.iconBg}>
              <FontAwesome
                name={account.icon}
                size={16}
                color={account.iconColor}
              />
            </IconContainer>
            <AccountInfo>
              <AccountName>{account.name}</AccountName>
              <AccountNumber>{account.accountNumber}</AccountNumber>
            </AccountInfo>
            <Balance>
              {account.balance < 0 && "-"}
              {formatCurrency(Math.abs(account.balance), currency)}
            </Balance>
          </AccountCard>
        ))}
      </AccountsContainer>

      <IncomesExpensesContainer>
        <ChartHeader>
          <ChartTitle>Income vs Expenses</ChartTitle>
          <PeriodSelector>
            <PeriodText>This M...</PeriodText>
            <Feather
              name="chevron-down"
              size={16}
              color={theme.colors.secondaryText}
            />
          </PeriodSelector>
        </ChartHeader>
        <ChartContainer>
          <BarChart
            data={chartData}
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
            maxValue={Math.ceil(maxTransactionValue / 1000)}
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
        </ChartContainer>
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
      </IncomesExpensesContainer>

      <TransctionsContainer>
        <TransactionTitle>Recent Transactions</TransactionTitle>

        {recentTransactions.map((transaction) => {
          const category = categories.find(
            (c) => c.id === transaction.categoryId
          );

          if (!category) return null;

          const isIncome = category?.type === "income";

          return (
            <TransactionCard key={transaction.id}>
              <TransactionIconContainer bgColor={category.iconBg}>
                <FontAwesome
                  name={category.icon}
                  size={16}
                  color={category.iconColor}
                />
              </TransactionIconContainer>
              <TransactionInfo>
                <TransactionName>{transaction.description}</TransactionName>
                <TransactionDate>
                  {formatTransactionDate(transaction.date)}
                </TransactionDate>
              </TransactionInfo>
              <Amount color={category?.iconColor}>
                {isIncome ? "+" : "-"}
                {formatCurrency(Math.abs(transaction.amount), currency)}
              </Amount>
            </TransactionCard>
          );
        })}
      </TransctionsContainer>
    </Container>
  );
}
