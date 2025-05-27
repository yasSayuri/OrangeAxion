// styled.d.ts
import 'styled-components';
import { theme } from './styles/theme'; // seu tema exportado

type CustomTheme = typeof theme;

declare module 'styled-components' {
  // Estende a interface DefaultTheme com o tipo do seu tema customizado
  export interface DefaultTheme extends CustomTheme {}
}
