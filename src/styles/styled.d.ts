import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    size: {
      mobile: string;
      desktop: string;
    };
  }
}
