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
import { useData } from "../../../hooks/useData";
import Loader from "../../../components/common/Loader";

export function Profile() {
  const { isDark, toggleTheme } = useThemeContext();
  const { showValues, toggleValuesVisibility } = useValuesVisibility();
  const { user, loading } = useData();

  if (loading) {
    return <Loader />;
  }

  return (
    <ProfileContainer>
      <ProfileHeader name={user?.name} />

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
