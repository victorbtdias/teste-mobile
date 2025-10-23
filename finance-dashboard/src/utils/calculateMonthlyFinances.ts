import { transactions } from "../mock/transactions";
import { categories } from "../mock/categories";

export interface MonthlyFinance {
  month: string;
  income: number;
  expense: number;
}

export function calculateMonthlyFinances(): MonthlyFinance[] {
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

  return Object.entries(grouped).map(([month, { income, expense }]) => ({
    month,
    income,
    expense,
  }));
}
