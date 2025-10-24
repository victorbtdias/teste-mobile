import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { PickerContainer, PickerText, PickInputLabel } from "./styled";

interface PickerFieldProps {
  label: string;
  value: string;
  onPress: () => void;
  icon?: "chevron-down" | "calendar-number-outline";
}

export function PickerField({
  label,
  value,
  onPress,
  icon = "chevron-down",
}: PickerFieldProps) {
  const theme = useTheme();

  return (
    <>
      <PickInputLabel>{label}</PickInputLabel>
      <PickerContainer onPress={onPress}>
        <PickerText>{value || "Select option"}</PickerText>
        <Ionicons name={icon} size={20} color={theme.colors.secondaryText} />
      </PickerContainer>
    </>
  );
}
