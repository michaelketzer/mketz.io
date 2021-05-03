import { ReactElement } from 'react';

export default function Presentation(): ReactElement {
  return (
    <div>
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
        Du hast irgendwie den Weg hierhin gefunden, die Seite befindet sich aktuell noch im Aufbau, also noch stimmt
        nicht alles hier{' '}
        <span role="img" aria-label={'Winking face'}>
          😉
        </span>
      </div>
    </div>
  );
}
