import { FontAwesome } from "@expo/vector-icons";

export interface Category {
  id: string;
  name: string;
  type: "income" | "expense";
  icon: keyof typeof FontAwesome.glyphMap;
  iconColor: string;
  iconBg: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Salary",
    type: "income",
    icon: "arrow-down",
    iconColor: "#16A34A",
    iconBg: "#DCFCE7",
  },
  {
    id: "2",
    name: "Shopping",
    type: "expense",
    icon: "shopping-cart",
    iconColor: "#DC2626",
    iconBg: "#FEE2E2",
  },
  {
    id: "3",
    name: "Food",
    type: "expense",
    icon: "cutlery",
    iconColor: "#EA580C",
    iconBg: "#FFEDD5",
  },
];
