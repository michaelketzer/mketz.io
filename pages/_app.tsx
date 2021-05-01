import '../styles/global.css';

import { ReactElement, useEffect } from 'react';

import type { AppProps } from 'next/app';
import { Theme } from '../Components/ThemeSwitch';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  useEffect(() => {
    const theme = localStorage.getItem('theme') || Theme.light;
    document.querySelector('body').classList.add(theme);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
