import { ButtonContainer, ButtonText } from "./styled";

interface ButtonProps {
  label: string;
  onPress: () => void;
}

export function PrimaryButton({ label, onPress }: ButtonProps) {
  return (
    <ButtonContainer activeOpacity={0.8} onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </ButtonContainer>
  );
}
