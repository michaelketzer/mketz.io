import '../styles/global.css';

import { ReactElement, useEffect } from 'react';

import type { AppProps } from 'next/app';
import { Theme } from '../Components/ThemeSwitch';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    let theme = localStorage.getItem('theme');
    if (!theme) {
      const query = '(prefers-color-scheme: dark)';
      const match = window.matchMedia(query);
      theme = match.media !== query || match.matches ? Theme.dark : Theme.light;
    }
    document.querySelector('body').classList.add(theme);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
