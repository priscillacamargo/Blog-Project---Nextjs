/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import { ThemeProvider } from "theme-ui";
import type { AppProps /*, AppContext */ } from "next/app";
import { LocalizationProvider } from "./contexts/react-intl";

import theme from "./theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LocalizationProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </LocalizationProvider>
  );
}

export default MyApp;
