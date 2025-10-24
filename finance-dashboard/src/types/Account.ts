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
