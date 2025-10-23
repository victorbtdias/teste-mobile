import { FontAwesome } from "@expo/vector-icons";
import {
  CardComplement,
  CardContainer,
  CardIcon,
  CardInfo,
  CardTitle,
  CardValue,
} from "./styled";

interface InfoCardProps {
  title: string;
  complement: string;
  value: string;
  icon: keyof typeof FontAwesome.glyphMap;
  iconColor: string;
  iconBg: string;
  valueColor?: string;
}

export function InfoCard({
  title,
  complement,
  value,
  icon,
  iconColor,
  iconBg,
  valueColor,
  ...props
}: InfoCardProps) {
  return (
    <CardContainer {...props}>
      <CardIcon bgColor={iconBg}>
        <FontAwesome name={icon} size={16} color={iconColor} />
      </CardIcon>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardComplement>{complement}</CardComplement>
      </CardInfo>
      <CardValue color={valueColor}>{value}</CardValue>
    </CardContainer>
  );
}
