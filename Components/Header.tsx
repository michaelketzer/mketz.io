import Link from 'next/link';
import { ReactElement } from 'react';
import ThemeSwitch from './ThemeSwitch';

export default function Header(): ReactElement {
  return (
    <nav role={'navigation'} className={'header'}>
      <ThemeSwitch />

      <ul>
        <li>
          <Link href={'/'}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href={'/rezepte'}>
            <a>Rezepte</a>
          </Link>
        </li>
      </ul>

      <style jsx>{`
        .header {
          margin: var(--container-spacing) auto;
          max-width: 900px;
          position: sticky;
          z-index: 10;
          top: 0;
          backdrop-filter: saturate(180%) blur(20px);
          padding: 1rem var(--container-spacing);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        ul {
          list-style-type: none;
          display: flex;
          margin: 0;
          padding: 0;
          align-items: center;
          grid-gap: 2rem;
        }

        li {
          padding: 0;
        }

        a {
          text-decoration: none;
          font-size: 1rem;
          color: var(--font-color-header);
        }
      `}</style>
    </nav>
  );
}
