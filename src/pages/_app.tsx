import "../styles/tailwind.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

const App = ({ Component, pageProps }: AppProps) => (
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{
      /** Put your mantine theme override here */
      colorScheme: "light",
    }}
  >
    <Component {...pageProps} />
  </MantineProvider>
);

export default App;
