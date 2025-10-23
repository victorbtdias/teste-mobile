import { accounts } from "../mock/accounts";
import { transactions } from "../mock/transactions";
import { categories } from "../mock/categories";

export function getAccountBalances() {
  return accounts.map((account) => {
    const accountTransactions = transactions.filter(
      (t) => t.accountId === account.id
    );

    const balance = accountTransactions.reduce((acc, t) => {
      const category = categories.find((c) => c.id === t.categoryId);

      if (!category) return acc;

      if (category.type === "income") return acc + t.amount;
      if (category.type === "expense") return acc - Math.abs(t.amount);
      return acc;
    }, 0);

    return {
      ...account,
      balance,
    };
  });
}

export function getTotalBalance() {
  const balances = getAccountBalances();
  return balances.reduce((acc, a) => acc + a.balance, 0);
}
