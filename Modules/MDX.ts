import MDXComponents from '../Components/MDXComponents';
import { MdxRemote } from 'next-mdx-remote/types';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';
import renderToString from 'next-mdx-remote/render-to-string';

type MDXFolders = 'blog' | 'recipes';

const root = process.cwd();

export async function getFiles(type: MDXFolders): Promise<string[]> {
  return fs.promises.readdir(path.join(root, 'data', type));
}

export interface MDXFileProps {
  metaData: {
    readingMinutes: number;
    readingTime: number;
    slug: string;
    wordCount: number;
  };
  mdxSource: MdxRemote.Source;
}

export async function getFileBySlug(type: MDXFolders, slug: string): Promise<MDXFileProps> {
  const source = await fs.promises.readFile(path.join(root, 'data', type, `${slug}.mdx`), 'utf8');

  const { data, content } = matter(source);
  const mdxSource = await renderToString(content, { components: MDXComponents });
  const readStats = readingTime(content);

  return {
    mdxSource,
    metaData: {
      readingMinutes: readStats.minutes,
      readingTime: readStats.time,
      slug: slug || null,
      wordCount: readStats.words,
      ...data,
    },
  };
}
