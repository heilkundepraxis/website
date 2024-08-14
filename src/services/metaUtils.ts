export const generateMeta = (title?: string, description?: string) => {
  const metaTitle = `${title ? `${title} – ` : ''}Heilkundepraxis Elfriede Steil`;
  const metaDescription = description || 'Praxis für Naturheilkunde und Physiotherapie in Unterwössen und Umgebung.';

  return {
    title: metaTitle,

    meta: {
      ogLocale: {
        property: 'og:locale',
        content: 'de-DE',
      },
      ogSiteName: {
        property: 'og:site_name',
        content: 'Heilkundepraxis Steil',
      },
      ogType: {
        property: 'og:type',
        content: 'website',
      },
      ogTitle: {
        property: 'og:title',
        content: metaTitle,
      },
      description: {
        name: 'description',
        content: metaDescription,
      },
      ogDescription: {
        property: 'og:description',
        content: metaDescription,
      },
      ogImage: {
        property: 'og:image',
        content: 'https://www.heilkundepraxis-steil.de/images/heilkundepraxis-steil-header-logo.png',
      },
    },
  };
};
