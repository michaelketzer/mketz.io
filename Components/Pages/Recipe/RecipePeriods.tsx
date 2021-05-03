import { ReactElement } from 'react';
import { RecipeSpecificMetaData } from '../../../Modules/MDX';

function timeToReadable(time: number): string {
  const hrs = Math.floor(time / 60);
  const min = Math.floor(time % 60);

  const minStr = `${min} ${min !== 1 ? 'Minuten' : 'Minute'}`;

  if (hrs > 0) {
    return `${hrs} ${hrs !== 1 ? 'Stunden' : 'Stunde'} ${minStr}`;
  }
  return minStr;
}

interface Props {
  metaData: RecipeSpecificMetaData;
}

export default function RecipePeriods({ metaData: { prepTime, cookTime, chillTime, totalTime } }: Props): ReactElement {
  return (
    <div className={'periods'}>
      <div className={'period'}>
        <div className={'label'}>
          <span className={'name'}>Arbeitszeit</span> ca. {timeToReadable(prepTime)}
        </div>
      </div>
      <div className={'period'}>
        <div className={'label'}>
          <span className={'name'}>Kochzeit</span> ca. {timeToReadable(cookTime)}
        </div>
      </div>
      {chillTime > 0 && (
        <div className={'period'}>
          <div className={'label'}>
            <span className={'name'}>Ruhezeit</span> ca. {timeToReadable(chillTime)}
          </div>
        </div>
      )}
      <div className={'period'}>
        <div className={'label'}>
          <span className={'name'}>Gesamtzeit</span> ca. {timeToReadable(totalTime)}
        </div>
      </div>

      <style jsx>{`
        .periods {
          margin-top: 1rem;
          display: flex;
          align-items: center;
          grid-gap: 0.5rem;
          flex-wrap: wrap;
          font-size: 0.75rem;
        }

        .period {
          background-color: var(--button-secondary);
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
        }

        .label {
          font-weight: 300;
        }
      `}</style>
    </div>
  );
}
