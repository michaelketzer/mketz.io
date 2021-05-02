import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next';
import { MDXFileProps, getFileBySlug, getFiles } from '../../Modules/MDX';

import MDXComponents from '../../Components/MDXComponents';
import { ReactElement } from 'react';
import hydrate from 'next-mdx-remote/hydrate';

export default function Post({ mdxSource }: MDXFileProps): ReactElement {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  });

  return <div>{content}</div>;
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
}: GetStaticPropsContext<{ slug: string }>): Promise<GetStaticPropsResult<MDXFileProps>> {
  const post = await getFileBySlug('recipes', slug);

  return { props: post };
}
