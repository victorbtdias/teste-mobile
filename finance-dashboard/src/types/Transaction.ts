export interface Transaction {
  id?: string;
  accountId: string;
  categoryId: string;
  amount: number;
  description: string;
  date: string;
}
