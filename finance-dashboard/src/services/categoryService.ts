import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Category } from "../types/Category";

export const categoryService = {
  findAll: async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "categories"));

      const categories: Category[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Category[];

      return categories;
    } catch (error) {
      console.error("Error fetching categories:", error);
      throw error;
    }
  },
};
