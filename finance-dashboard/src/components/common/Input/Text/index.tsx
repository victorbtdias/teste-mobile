import { useTheme } from "styled-components/native";
import { InputLabel, TextInput } from "./styled";

interface InputProps {
  label: string;
  placeholder: string;
  onChange: (text: string) => void;
  onBlur: (e: any) => void;
  value: string;
  keyboardType?: string;
}

export function TextInputField({
  label,
  placeholder,
  onChange,
  onBlur,
  value,
  keyboardType,
}: InputProps) {
  const theme = useTheme();

  return (
    <>
      <InputLabel>{label}</InputLabel>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={theme.colors.secondaryText}
        onChangeText={onChange}
        onBlur={onBlur}
        value={value}
        keyboardType={keyboardType}
      />
    </>
  );
}
