import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { theme } from "../theme";
import { ThemeProvider, createGlobalStyle } from "styled-components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const GlobalStyle = createGlobalStyle`
  /* Estilizações globais aqui */
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    /* Outras propriedades de estilo */
  }

  

  /* Outras estilizações globais */
`;
