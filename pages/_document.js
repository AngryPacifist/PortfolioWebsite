// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/avatar.png" />
        <title>outis</title>
        <meta name="description" content="OUTIS" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
