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
  const dir = path.join(root, 'data', type);
  if (fs.existsSync(dir)) {
    return fs.promises.readdir(dir);
  }
  return [];
}
export interface MDXMetaData {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  cover: string;
}

export interface RecipeSpecificMetaData extends MDXMetaData {
  prepTime: number;
  cookTime: number;
  chillTime: number;
  totalTime: number;
}
export interface MDXFileProps<T extends MDXMetaData> {
  metaData: {
    readingMinutes: number;
    readingTime: number;
    slug: string;
    wordCount: number;
  } & T;
  mdxSource: MdxRemote.Source;
}

export async function getFileBySlug<T extends MDXMetaData>(type: MDXFolders, slug: string): Promise<MDXFileProps<T>> {
  const source = await fs.promises.readFile(path.join(root, 'data', type, `${slug}.mdx`), 'utf8');

  const { data, content } = matter(source);
  data.datePublished = data.datePublished.toString();
  data.dateModified = data.dateModified.toString();
  const mdxSource = await renderToString(content, { components: MDXComponents });
  const readStats = readingTime(content);

  return {
    mdxSource,
    metaData: {
      readingMinutes: readStats.minutes,
      readingTime: readStats.time,
      slug: slug || null,
      wordCount: readStats.words,
      ...(data as T),
    },
  };
}
