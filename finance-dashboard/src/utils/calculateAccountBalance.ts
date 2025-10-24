import { Account } from "../types/Account";
import { Category } from "../types/Category";
import { Transaction } from "../types/Transaction";

//Calcula o saldo de cada conta individualmente

export function getAccountBalances(
  accounts: Account[],
  transactions: Transaction[],
  categories: Category[]
) {
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

//Calcula o saldo total somando os saldos individuais das contas

export function getTotalBalance(
  accounts: Account[],
  transactions: Transaction[],
  categories: Category[]
) {
  const balances = getAccountBalances(accounts, transactions, categories);
  return balances.reduce((acc, a) => acc + a.balance, 0);
}
