import "styled-components";

declare module "styled-componets" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      tertiary: string;

      white: string;
      black: string;
      gray: string;

      succerss: string;
      info: string;
      warning: string;
    };
  }
}
