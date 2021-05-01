import Header from '../Components/Header';
import PageLayout from '../Components/PageLayout';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <>
      <Header />
      <PageLayout>
        <h1>
          <span role="img" aria-label={'Waving Hand'}>
            👋
          </span>{' '}
          Hey, Ich bin Michael
        </h1>

        <div className={'info'}>
          Ich bin Frontend-Entwickler, wannabe Designer und Koche gerne.{' '}
          <span role="img" aria-label={'Slight smile'}>
            🙂
          </span>
          <br />
          <br />
          Du hast irgendwie den Weg hierhin gefunden, die Seite befindet sich aktuell noch im Aufbau, schau gerne in
          paar Tagen noch mal vorbei{' '}
          <span role="img" aria-label={'Winking face'}>
            😉
          </span>
        </div>
      </PageLayout>
    </>
  );
}
