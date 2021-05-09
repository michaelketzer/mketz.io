const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const lowPrio = new Set(['/impressum']);

(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'pages/*.tsx',
    'data/**/*.mdx',
    '!data/*.mdx',
    '!pages/_*.tsx',
    '!pages/api',
    '!pages/404.tsx',
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
      .map((page) => {
        let path = page
          .replace('pages', '')
          .replace('data', '')
          .replace('.tsx', '')
          .replace('.mdx', '');
        const route = path === '/index' ? '' : path;
        return `
                        <url>
                            <loc>${`https://www.mketz.io${route}`}</loc>
                            <priority>${lowPrio.has(route) ? .3 : .7}</priority>
                        </url>
                    `;
      })
      .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  });

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', formatted);
})();