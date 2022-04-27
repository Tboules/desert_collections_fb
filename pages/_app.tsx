import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../lib/context/UserContext";
import { Layout } from "../lib/layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
}

export default MyApp;
