import { user } from "../../../mock/user";
import { useThemeContext } from "../../../contexts/ThemeContext";
import { useValuesVisibility } from "../../../contexts/ValuesVisibilityContext";
import { ProfileHeader } from "../../../components/Header/Profile";
import { SwitchInput } from "../../../components/common/Input/Switch";
import { CurrencySelector } from "../../../components/common/Input/CurrencySelector";
import {
  ProfileContainer,
  ProfileContent,
  ProfileSectionTitle,
} from "./styled";

export function Profile() {
  const { isDark, toggleTheme } = useThemeContext();
  const { showValues, toggleValuesVisibility } = useValuesVisibility();

  return (
    <ProfileContainer>
      <ProfileHeader name={user.name} />

      <ProfileContent>
        <ProfileSectionTitle>Settings</ProfileSectionTitle>

        <SwitchInput
          label="Security"
          text="Hide values by default"
          value={!showValues}
          onChange={toggleValuesVisibility}
        />

        <SwitchInput
          label="Appearance"
          text="Dark Mode"
          value={isDark}
          onChange={toggleTheme}
        />

        <CurrencySelector />
      </ProfileContent>
    </ProfileContainer>
  );
}
