import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
  return rss({
    title: 'Apprenant Astro | Blog',
    description: "Mon parcours d'apprentissage Astro",
    site: 'https://dwwm-tutorial-astro.netlify.app/',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>fr-fr</language>`
  });
}
