// pages/_app.tsx
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global';
import { theme } from '../styles/theme';
import { AuthProvider } from '../context/AuthContext'; // Certifique-se que esta linha está aqui!

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AuthProvider> {/* Envolve toda a sua aplicação */}
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}