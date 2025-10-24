import { Category } from "../types/Category";
import { Transaction } from "../types/Transaction";

export interface MonthlyFinance {
  month: string;
  income: number;
  expense: number;
}

const USD_TO_BRL = 5.39; //Foi considerado a cotação do dólar no dia 23/10. Em um caso real, eu utilizaria uma api para conversão de moedas.

export function calculateMonthlyFinances(
  transactions: Transaction[],
  categories: Category[],
  currency: "USD" | "BRL"
): MonthlyFinance[] {
  const grouped: Record<string, { income: number; expense: number }> = {};

  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const month = date.toLocaleString("en-US", { month: "short" });
    const category = categories.find((c) => c.id === transaction.categoryId);

    if (!category) return;

    if (!grouped[month]) grouped[month] = { income: 0, expense: 0 };

    if (category.type === "income") {
      grouped[month].income += transaction.amount;
    } else {
      grouped[month].expense += Math.abs(transaction.amount);
    }
  });

  return Object.entries(grouped).map(([month, { income, expense }]) => {
    const rate = currency === "BRL" ? USD_TO_BRL : 1;
    return {
      month,
      income: income * rate,
      expense: expense * rate,
    };
  });
}
