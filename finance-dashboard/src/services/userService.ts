import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { User } from "../types/User";

export const userService = {
  findById: async (id: string) => {
    try {
      const docRef = doc(db, "user", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.warn(`User with id ${id} not found`);
        return undefined;
      }

      const user = { id: docSnap.id, ...docSnap.data() } as User;

      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  },
};
