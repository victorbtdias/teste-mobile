import { transactions } from "../mock/transactions";

export function getRecentTransactions(limit = 3) {
  return [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
