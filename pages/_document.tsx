import Document, { Head, Html, Main, NextScript } from 'next/document';

import { ReactElement } from 'react';

export default class MyDocument extends Document {
  render(): ReactElement {
    return (
      <Html lang={'de'}>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="Content-Language" content={'de'} />
          <link rel="apple-touch-icon" sizes="57x57" href="/static/sharing/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/static/sharing/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/static/sharing/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/static/sharing/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/static/sharing/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/static/sharing/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/static/sharing/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/static/sharing/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/static/sharing/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/sharing/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/static/sharing/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/static/sharing/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/static/sharing/favicon-16x16.png" />
          <link rel="manifest" href="/static/sharing/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/static/sharing/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />

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
