import Link from 'next/link';
import { ReactElement } from 'react';

export default function Footer(): ReactElement {
  return (
    <footer>
      <hr />

      <div className={'grid'}>
        <ul className={'list'}>
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

        <ul className={'list'}>
          <li>
            <a href={'https://twitter.com/griefcode'} target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href={'https://github.com/michaelketzer'} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </li>
        </ul>

        <ul className={'list'}>
          <li>
            <Link href={'/impressum'}>
              <a>Impressum</a>
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        footer {
          margin-top: var(--container-spacing);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;
          font-size: 0.9rem;
        }

        li {
          padding: 0 0 var(--list-spacing) 0;
        }
        a {
          text-decoration: none;
          color: var(--font-color);
        }

        @media only screen and (max-width: 766px) {
          .grid {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }
      `}</style>
    </footer>
  );
}
