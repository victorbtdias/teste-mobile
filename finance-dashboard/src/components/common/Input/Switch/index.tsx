import {
  SettingsSwitch,
  SwitchInputCard,
  SwitchInputContent,
  SwitchInputLabel,
  SwitchInputRow,
  SwitchInputText,
} from "./styled";

interface InputProps {
  label: string;
  text: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export function SwitchInput({ label, text, value, onChange }: InputProps) {
  return (
    <SwitchInputContent>
      <SwitchInputLabel>{label}</SwitchInputLabel>
      <SwitchInputCard>
        <SwitchInputRow>
          <SwitchInputText>{text}</SwitchInputText>
          <SettingsSwitch
            value={value}
            onValueChange={onChange}
            trackColor={{ false: "#E5E7EB", true: "#10B981" }}
            thumbColor="#ffffff"
          />
        </SwitchInputRow>
      </SwitchInputCard>
    </SwitchInputContent>
  );
}
