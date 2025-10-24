import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Account } from "../types/Account";

export const accountService = {
  findAll: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "accounts"));

      const accounts: Account[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Account[];

      return accounts;
    } catch (error) {
      console.error("Error fetching accounts:", error);
      throw error;
    }
  },
};
