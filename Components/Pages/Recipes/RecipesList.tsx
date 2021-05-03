import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
import { RecipeListItem } from '../../../pages/rezepte';

interface Props {
  recipes: RecipeListItem[];
}

export default function RecipesList({ recipes }: Props): ReactElement {
  return (
    <div>
      <h1>
        <span role={'img'} aria-label={'cook'}>
          🧑‍🍳
        </span>{' '}
        Hier findest du alle Rezepte die ich empfehlenswert finde!
      </h1>

      <div className={'info'}>Viel Spaß beim nachkochen!</div>

      <div className={'recipesGrid'}>
        {recipes.map((recipe) => (
          <Link href={`/rezept/${recipe.slug}`} key={recipe.title}>
            <a className={'recipeTile'} title={recipe.title}>
              <div className={'coverImage'}>
                <Image src={recipe.cover} alt={recipe.title} layout={'fill'} objectFit={'cover'} />
              </div>

              <h2>{recipe.title}</h2>
              <div className={'recipeInfo'}>{recipe.description}</div>
            </a>
          </Link>
        ))}
      </div>

      <style jsx>{`
        a {
          text-decoration: none;
        }

        .recipesGrid {
          margin-top: var(--container-spacing);
          display: grid;
          grid-template-columns: 0.5fr 0.5fr;
          grid-gap: var(--container-spacing);
        }

        .recipeTile {
          display: block;
          cursor: pointer;
          border: 1px solid var(--button-secondary);
          border-radius: 0.3rem;
          padding: calc(var(--container-spacing) / 2);
        }

        .coverImage {
          padding-top: 56.25%;
          position: relative;
        }

        .recipeInfo {
          font-weight: 400;
          font-size: 0.8rem;
        }

        h2 {
          margin-top: 1em;
          margin-bottom: 1em;
          font-size: 1.17em;
        }
      `}</style>
    </div>
  );
}
