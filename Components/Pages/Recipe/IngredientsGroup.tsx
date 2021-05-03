import React, { ReactElement } from 'react';

interface Props {
  ingredients: Array<{ amount: string; ingredient: string }>;
  title?: string;
}

export default function IngredientsGroup({ ingredients, title = 'Zutaten' }: Props): ReactElement {
  return (
    <div>
      <h2>{title}</h2>

      <div className={'ingredientsGrid'}>
        {ingredients.map(({ amount, ingredient }) => (
          <React.Fragment key={ingredient}>
            <div className={'amount'}>{amount}</div>
            <div className={'ingredient'}>{ingredient}</div>
          </React.Fragment>
        ))}
      </div>

      <style jsx>{`
        .ingredientsGrid {
          display: grid;
          grid-template-columns: 0.3fr 0.7fr;
          grid-row-gap: 0.5rem;
          grid-column-gap: 0.5rem;
          max-width: 600px;
          font-size: 1rem;
        }

        .amount {
          font-weight: 600;
          text-align: right;
          padding: 0 0 0 2rem;
        }
      `}</style>
    </div>
  );
}
