import { db } from "../firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Transaction } from "../types/Transaction";

export const transactionService = {
  findAll: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "transactions"));

      const transactions: Transaction[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Transaction[];

      return transactions;
    } catch (error) {
      console.error("Error fetching transactions:", error);
      throw error;
    }
  },

  create: async (data: Transaction) => {
    try {
      const docRef = await addDoc(collection(db, "transactions"), data);

      return docRef;
    } catch (error) {
      console.error("Error saving transaction:", error);
      throw error;
    }
  },
};
