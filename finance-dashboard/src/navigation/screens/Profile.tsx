import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Fragment, useState } from "react";
import styled, { DefaultTheme } from "styled-components/native";
import { user } from "../../mock/user";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useValuesVisibility } from "../../contexts/ValuesVisibilityContext";

const userImage = require("../../../assets/user.png");
const usFlag = require("../../../assets/us.png");
const brFlag = require("../../../assets/br.png");

const Container = styled(LinearGradient).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    colors: [theme.colors.primary, theme.colors.gradient],
    start: { x: 0, y: 1 },
    end: { x: 1, y: 1 },
  })
)`
  flex: 1;
`;

const Header = styled.View`
  padding: 24px;
`;

const ProfileSection = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 26px;
`;

const ProfileImage = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 999px;
`;

const UserName = styled.Text`
  font-size: 20px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.lightText};
`;

const Content = styled.ScrollView`
  flex: 1;
  padding: 24px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
`;

const Section = styled.View`
  margin: 24px 0 10px 0;
  gap: 12px;
`;

const SectionLabel = styled.Text`
  font-size: 14px;
  color: #ffffff;
`;

const SettingCard = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  border-radius: 24px;
  padding: 8px 8px 8px 16px;
`;

const SettingRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SettingText = styled.Text`
  font-size: 14px;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.settingsText};
`;

const Switch = styled.Switch``;

const CurrencyCard = styled.View`
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.colors.card};
  border-radius: 24px;
  padding: 16px 0;
`;

const CurrencyOption = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;

const CurrencyFlag = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

const FlagImage = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 999px;
`;

const CurrencyCode = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }: { theme: DefaultTheme }) => theme.colors.settingsText};
`;

const Divider = styled.View`
  height: 2px;
  background-color: #cacaca;
  margin: 0 20px;
`;

export function Profile() {
  const { isDark, toggleTheme } = useThemeContext();
  const { showValues, toggleValuesVisibility } = useValuesVisibility();

  const [currencies, setCurrencies] = useState([
    {
      code: "USD",
      flagUrl: usFlag,
      selected: true,
    },
    {
      code: "BRL",
      flagUrl: brFlag,
      selected: false,
    },
  ]);

  const handleCurrencySelect = (code: string) => {
    setCurrencies(
      currencies.map((currency) => ({
        ...currency,
        selected: currency.code === code,
      }))
    );
  };

  return (
    <Container>
      <Header>
        <ProfileSection>
          <ProfileImage source={userImage} />
          <UserName>{user.name}</UserName>
        </ProfileSection>
      </Header>

      <Content>
        <SectionTitle>Settings</SectionTitle>

        <Section>
          <SectionLabel>Security</SectionLabel>
          <SettingCard>
            <SettingRow>
              <SettingText>Hide values by default</SettingText>
              <Switch
                value={!showValues}
                onValueChange={toggleValuesVisibility}
                trackColor={{ false: "#E5E7EB", true: "#10B981" }}
                thumbColor="#ffffff"
              />
            </SettingRow>
          </SettingCard>
        </Section>

        <Section>
          <SectionLabel>Appearance</SectionLabel>
          <SettingCard>
            <SettingRow>
              <SettingText>Dark Mode</SettingText>
              <Switch
                value={isDark}
                onValueChange={toggleTheme}
                trackColor={{ false: "#E5E7EB", true: "#10B981" }}
                thumbColor="#ffffff"
              />
            </SettingRow>
          </SettingCard>
        </Section>

        <Section>
          <SectionLabel>Currency</SectionLabel>
          <CurrencyCard>
            {currencies.map((currency, index) => (
              <Fragment key={currency.code}>
                <CurrencyOption
                  onPress={() => handleCurrencySelect(currency.code)}
                  activeOpacity={0.7}
                >
                  <CurrencyFlag>
                    <FlagImage source={currency.flagUrl} />
                    <CurrencyCode>{currency.code}</CurrencyCode>
                  </CurrencyFlag>
                  {currency.selected && (
                    <Feather
                      name="check"
                      size={24}
                      color={!isDark ? "#000000" : "#ffffff"}
                    />
                  )}
                </CurrencyOption>
                {index < currencies.length - 1 && <Divider />}
              </Fragment>
            ))}
          </CurrencyCard>
        </Section>
      </Content>
    </Container>
  );
}
