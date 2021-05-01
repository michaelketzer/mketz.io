import { ReactElement } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function Header(): ReactElement {
  return (
    <nav role={'navigation'} className={'header'}>
      <ThemeSwitch />
      <style jsx>{`
        .header {
          margin: var(--container-spacing) auto;
          max-width: 900px;
          position: sticky;
          z-index: 10;
          top: 0;
          backdrop-filter: saturate(180%) blur(20px);
          padding: 1rem var(--container-spacing);
        }
      `}</style>
    </nav>
  );
}
