import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { User } from "../types/User";

export const userService = {
  findById: async (id: string) => {
    try {
      const docRef = doc(db, "user", id);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        console.warn(`Usuário com id ${id} não encontrado.`);
        return undefined;
      }

      const user = { id: docSnap.id, ...docSnap.data() } as User;

      return user;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
      throw error;
    }
  },
};
