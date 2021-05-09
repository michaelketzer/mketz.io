import Footer from '../Components/Footer';
import { GetStaticPropsResult } from 'next';
import Header from '../Components/Header';
import { NextSeo } from 'next-seo';
import PageLayout from '../Components/PageLayout';
import RSSFeed from '../Components/Pages/Recipes/RSSFeed';
import { ReactElement } from 'react';
import { RecipeSpecificMetaData } from '../Modules/MDX';
import RecipesList from '../Components/Pages/Recipes/RecipesList';
import { defaultSeo } from '.';
import { promises as fs } from 'fs';
import path from 'path';

const recipesSeo = {
  ...defaultSeo,
  title: 'Rezepte zum Nachkochen und stöbern - Michael Ketzer',
  description:
    'Hier findet Ihr Rezepte die ich selbst bereits alle gekocht habe und Wert finde geteilt zu werden. Viel Spaß beim stöbern!',
  canonical: 'https://www.mketz.io/rezepte',
  openGraph: {
    url: 'https://www.mketz.io/rezepte',
    title: 'Rezepte zum Nachkochen und stöbern - Michael Ketzer',
    description:
      'Hier findet Ihr Rezepte die ich selbst bereits alle gekocht habe und Wert finde geteilt zu werden. Viel Spaß beim stöbern!',
    site_name: 'Michael Ketzer',
  },
};

export interface RecipeListItem extends RecipeSpecificMetaData {
  slug: string;
  url: string;
  filePath: string;
  fileName: string;
}

interface Props {
  recipes: RecipeListItem[];
}

export default function Rezepte({ recipes }: Props): ReactElement {
  return (
    <>
      <NextSeo {...recipesSeo} />

      <Header AdditionalHeader={RSSFeed} />
      <PageLayout>
        <RecipesList recipes={recipes} />
        <Footer />
      </PageLayout>
    </>
  );
}

function sortRecipesByDate(
  { datePublished: a }: RecipeSpecificMetaData,
  { datePublished: b }: RecipeSpecificMetaData,
): number {
  return a > b ? 1 : -1;
}
export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const recipesBuffer = await fs.readFile(path.join(process.cwd(), 'recipes.json'), 'utf-8');
  const recipes = JSON.parse(recipesBuffer).sort(sortRecipesByDate);
  return { props: { recipes } };
}
