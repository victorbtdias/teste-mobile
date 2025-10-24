import { Transaction } from "../types/Transaction";

export function getRecentTransactions(transactions: Transaction[], limit = 3) {
  return [...transactions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}
