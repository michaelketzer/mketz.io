import { ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function PageLayout({ children }: Props): ReactElement {
  return (
    <main role={'main'}>
      {children}

      <style jsx>{`
        main {
          max-width: 800px;
          margin: 0 auto;
          padding: 0.5rem var(--container-spacing);
        }
      `}</style>
    </main>
  );
}
