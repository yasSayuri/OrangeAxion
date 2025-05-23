// styled.d.ts
import 'styled-components';
import { theme } from './styles/theme'; // O caminho e o import com chaves estão corretos para o seu theme.ts

type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}