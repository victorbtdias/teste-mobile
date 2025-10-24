import { useEffect, useState } from "react";
import { accountService } from "../services/accountService";
import { transactionService } from "../services/transactionService";
import { categoryService } from "../services/categoryService";
import { Account } from "../types/Account";
import { Transaction } from "../types/Transaction";
import { Category } from "../types/Category";
import { userService } from "../services/userService";
import { User } from "../types/User";

export function useData() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  async function loadData() {
    try {
      setLoading(true);
      const [accountRes, transactionRes, categoryRes, userRes] =
        await Promise.all([
          accountService.findAll(),
          transactionService.findAll(),
          categoryService.findAll(),
          userService.findById("42"),
        ]);

      setAccounts(accountRes);
      setTransactions(transactionRes);
      setCategories(categoryRes);
      setUser(userRes);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return {
    accounts,
    transactions,
    categories,
    user,
    loading,
    reload: loadData,
  };
}
