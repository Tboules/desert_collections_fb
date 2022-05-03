import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com">
          <link rel="stylesheet" href="https://fonts.gstatic.com" crossOrigin> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,500;0,600;1,500;1,600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
