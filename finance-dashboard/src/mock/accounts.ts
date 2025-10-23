import { FontAwesome } from "@expo/vector-icons";

export interface Account {
  id: string;
  userId: string;
  name: string;
  accountNumber: string;
  type: string;
  icon: keyof typeof FontAwesome.glyphMap;
  iconColor: string;
  iconBg: string;
}

export const accounts: Account[] = [
  {
    id: "1",
    userId: "42",
    name: "Chase Checking",
    accountNumber: "****1234",
    type: "checking",
    icon: "bank",
    iconColor: "#2563EB",
    iconBg: "#DBEAFE",
  },
  {
    id: "2",
    userId: "42",
    name: "Savings Account",
    accountNumber: "****5678",
    type: "savings",
    icon: "credit-card-alt",
    iconColor: "#9333EA",
    iconBg: "#F3E8FF",
  },
];
