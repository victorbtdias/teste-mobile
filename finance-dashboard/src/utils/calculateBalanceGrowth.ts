import { Transaction } from "../types/Transaction";

export function calculateBalanceGrowth(transactions: Transaction[]): number {
  if (!transactions.length) return 0;

  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();

  const previousMonth = currentMonth === 0 ? 11 : currentMonth - 1;
  const previousYear = currentMonth === 0 ? currentYear - 1 : currentYear;

  const monthKeyCurrent = `${currentYear}-${String(currentMonth + 1).padStart(
    2,
    "0"
  )}`;
  const monthKeyPrev = `${previousYear}-${String(previousMonth + 1).padStart(
    2,
    "0"
  )}`;

  const monthlyTotals: Record<string, number> = {};

  transactions.forEach((t) => {
    const date = new Date(t.date);
    const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}`;
    monthlyTotals[key] = (monthlyTotals[key] || 0) + t.amount;
  });

  const sortedMonths = Object.keys(monthlyTotals).sort();
  const cumulative: Record<string, number> = {};
  let total = 0;

  sortedMonths.forEach((key) => {
    total += monthlyTotals[key];
    cumulative[key] = total;
  });

  const lastBalance = cumulative[monthKeyCurrent];
  const prevBalance = cumulative[monthKeyPrev];

  if (lastBalance == null || prevBalance == null || prevBalance === 0) return 0;

  const growth = ((lastBalance - prevBalance) / Math.abs(prevBalance)) * 100;

  return growth;
}
