import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { MDXFileProps, RecipeSpecificMetaData, getFileBySlug, getFiles } from '../../Modules/MDX';

import MDXComponents from '../../Components/MDXComponents';
import { ReactElement } from 'react';
import RecipeLayout from '../../Components/Pages/Recipe/RecipeLayout';
import hydrate from 'next-mdx-remote/hydrate';

export default function Post({ mdxSource, metaData }: MDXFileProps<RecipeSpecificMetaData>): ReactElement {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <RecipeLayout metaData={metaData}>{content}</RecipeLayout>;
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const posts = await getFiles('recipes');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({
  params: { slug },
}: GetStaticPropsContext<{ slug: string }>): Promise<GetStaticPropsResult<MDXFileProps<RecipeSpecificMetaData>>> {
  const post = await getFileBySlug<RecipeSpecificMetaData>('recipes', slug);

  return { props: post };
}
