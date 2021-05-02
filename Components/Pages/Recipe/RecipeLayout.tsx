import { MDXFileProps, RecipeSpecificMetaData } from '../../../Modules/MDX';
import { NextSeo, NextSeoProps } from 'next-seo';
import { ReactElement, ReactNode, useEffect, useState } from 'react';

import Footer from '../../Footer';
import Header from '../../Header';
import PageLayout from '../../PageLayout';
import RecipeCooked from './RecipeCooked';
import RecipeCover from './RecipeCover';
import RecipePeriods from './RecipePeriods';
import { defaultSeo } from '../../../pages';

export const coverImageUrl = (cover: string): string => `https://www.mketz.io/${cover}`;

const recipeSeo = (metaData: MDXFileProps<RecipeSpecificMetaData>['metaData']): NextSeoProps => {
  const url = `https://www.mketz.io/rezept/${metaData.slug}`;
  return {
    ...defaultSeo,
    title: `${metaData.title} - Michael Ketzer`,
    description: metaData.description,
    canonical: url,
    openGraph: {
      url,
      title: `${metaData.title} - Michael Ketzer`,
      description: metaData.description,
      site_name: 'Michael Ketzer',
      images: [
        {
          url: coverImageUrl(metaData.cover),
          width: 1080,
          height: 810,
          alt: `${metaData.title} Cover`,
        },
      ],
    },
  };
};

interface Props {
  children: ReactNode;
  metaData: MDXFileProps<RecipeSpecificMetaData>['metaData'];
}

export default function RecipeLayout({ children, metaData }: Props): ReactElement {
  const [hits, setHits] = useState(0);

  useEffect(() => {
    fetch(`/api/recipes/register-hit?slug=${metaData.slug}`)
      .then((res) => res.json())
      .then(({ hits }) => setHits(hits));
  }, [metaData.slug]);

  return (
    <>
      <NextSeo {...recipeSeo(metaData)} />

      {/*
        <RecipeJsonLd
          name={metaData.title}
          description={metaData.description}
          datePublished={metaData.datePublished}
          authorName={['Michael Ketzer']}
          images={[coverImageUrl(metaData.cover)]}
        />
      */}

      <Header />

      <PageLayout>
        <div className={'header'}>
          <h1>{metaData.title}</h1>
          <div className={'hits'}>{hits} Views</div>
        </div>
        <RecipeCover src={metaData.cover} title={metaData.title} />
        <div className={'shortDescription'}>{metaData.description}</div>
        <RecipePeriods metaData={metaData} />

        <div className={'content'}>{children}</div>

        <RecipeCooked title={metaData.title} url={`https://www.mketz.io/rezept/${metaData.slug}`} />

        <Footer />

        <style jsx>{`
          .header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            grid-gap: var(--container-spacing);
          }

          .hits {
            font-size: 0.8rem;
            margin-top: 1.85rem;
            flex-shrink: 0;
          }
          .shortDescription {
            margin-top: 2rem;
          }

          .content {
            line-height: 1.7rem;
          }
        `}</style>
      </PageLayout>
    </>
  );
}
