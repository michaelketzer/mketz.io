const { promises: fs } = require('fs');
const path = require('path');
const matter = require('gray-matter');

const recipesPath = path.join(process.cwd(), 'data', 'rezept');

async function generate() {
  const recipes = await fs.readdir(recipesPath);
  const list = [];

  await Promise.all(
    recipes.map(async (name) => {
      const content = await fs.readFile(path.join(recipesPath, name));
      const { data } = matter(content);
      const slug = name.replace(/\.mdx?/, '');
      list.push({
        ...data,
        slug,
        url: 'https://www.mketz.io/rezept/' + name.replace(/\.mdx?/, ''),
        filePath: path.join(recipesPath, name),
        fileName: name,
      });
    }),
  );

  console.info('mketz.io - Wrote ./recipes.json');
  await fs.writeFile('./recipes.json', JSON.stringify(list));
}

generate();
