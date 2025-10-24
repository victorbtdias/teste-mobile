import { FontAwesome } from "@expo/vector-icons";

export interface Category {
  id: string;
  name: string;
  type: "income" | "expense";
  icon: keyof typeof FontAwesome.glyphMap;
  iconColor: string;
  iconBg: string;
}
