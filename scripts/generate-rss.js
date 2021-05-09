const { promises: fs } = require('fs');
const path = require('path');
const RSS = require('rss');
const matter = require('gray-matter');


(async () => {
  const feed = new RSS({
    title: 'Michael Ketzer - Rezepte',
    site_url: 'https://www.mketz.io',
    feed_url: 'https://www.mketz.io/recipes_feed.xml'
  });

  const posts = await fs.readdir(path.join(__dirname, '..', 'data', 'rezept'));

  await Promise.all(
    posts.map(async (name) => {
      const content = await fs.readFile(
        path.join(__dirname, '..', 'data', 'rezept', name)
      );
      const frontmatter = matter(content);

      feed.item({
        title: frontmatter.data.title,
        url: 'https://www.mketz.io/rezept/' + name.replace(/\.mdx?/, ''),
        date: frontmatter.data.datePublished,
        description: frontmatter.data.description
      });
    })
  );

  await fs.writeFile('./public/recipes_feed.xml', feed.xml({ indent: true }));
})();