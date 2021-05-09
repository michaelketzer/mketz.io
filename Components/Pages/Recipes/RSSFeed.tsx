import { ReactElement } from 'react';

export default function RSSFeed(): ReactElement {
  return (
    <a href={'/recipes_feed.xml'} target={'_blank'} rel="noreferrer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 11a9 9 0 0 1 9 9" />
        <path d="M4 4a16 16 0 0 1 16 16" />
        <circle cx="5" cy="19" r="1" />
      </svg>

      <style jsx>{`
        a {
          margin: 0 var(--list-spacing);
          display: flex;
          align-items: center;
        }

        svg {
          margin-top: -2px;
        }

        a:hover svg {
          color: var(--primary);
        }
      `}</style>
    </a>
  );
}
