import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      gradient: string;
      card: string;
      border: string;
      primaryText: string;
      secondaryText: string;
      lightText: string;
      settingsText: string;
    };
  }
}
