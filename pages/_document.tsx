import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ReactElement } from 'react';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang={'de'}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Language" content={'de'} />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;700&display=swap"
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
