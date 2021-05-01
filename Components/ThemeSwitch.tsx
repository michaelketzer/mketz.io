import { ReactElement, useCallback, useEffect, useState } from 'react';

import cs from 'classnames';

export enum Theme {
  // eslint-disable-next-line no-unused-vars
  dark = 'dark',
  // eslint-disable-next-line no-unused-vars
  light = 'light',
}

export default function ThemeSwitch(): ReactElement {
  const [theme, setTheme] = useState<Theme>(Theme.light);
  useEffect(() => {
    setTheme((localStorage.getItem('theme') as Theme) || Theme.light);
  }, []);
  const onSwitch = useCallback(() => {
    const newTheme = theme === Theme.light ? Theme.dark : Theme.light;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    const oldTheme = theme;

    setTimeout(() => {
      const classList = document.querySelector('body').classList;
      classList.remove(oldTheme);
      classList.add(newTheme);
    }, 250);
  }, [theme]);

  return (
    <button aria-label={'Toggle Dark Mode'} onClick={onSwitch}>
      <div className={cs('nightAndDay', theme)}>
        <div className={'dayWrapper'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        </div>
        <div className={'nightWrapper'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        button {
          background-color: var(--button-secondary);
          box-shadow: none;
          border: none;
          height: 2.5rem;
          width: 2.5rem;
          border-radius: 6px;
          cursor: pointer;
          padding: 0;
          overflow: hidden;
        }

        .nightAndDay {
          height: 6rem;
          width: 6rem;
          margin-left: -1.75rem;
          transition: 500ms ease-in-out;
          margin-top: -0.5rem;
        }

        .dark {
          transform: rotate(180deg);
        }

        .dayWrapper,
        .nightWrapper {
          height: 3rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dayWrapper {
          padding-top: 0.5rem;
          background-color: #dedede;

          & svg {
            color: #434343;
          }
        }

        .nightWrapper {
          padding-bottom: 0.5rem;
          background-color: #343434;
          & svg {
            color: #dcdcdc;
          }
        }

        svg {
          height: 16px;
          width: 16px;
        }
      `}</style>
    </button>
  );
}
