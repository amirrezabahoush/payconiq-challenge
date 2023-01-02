import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      accent: string;
      warn: string;
      text: {
        default: string;
        tableHeader: string;
      }
    },
    fontSize: {
      pageTitle: string;
      sectionTitle: string;
      body: string;
    }
  }
}
