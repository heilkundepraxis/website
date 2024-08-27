import { MetaOptions } from 'quasar/dist/types/meta';

import * as config from 'src/config';

export const generateMeta = (title?: string, description?: string): MetaOptions => {
  const metaTitle = `${title ? `${title} – ` : ''}Heilkundepraxis ${config.OWNER_NAME}`;
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
        content: `${config.WEB_HOST}/images/heilkundepraxis-steil-header-logo.png`,
      },
    },
  };
};

export const generateOrganizationJson = () => {
  const dayMapper = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const openingHours = config.BUSINESS_HOURS
    .map((bh) => !!bh.opens && `${dayMapper[bh.day]} ${bh.opens}-${bh.closes}`)
    .filter((d) => !!d) as string[];

  return {
    '@context': 'https://schema.org',
    '@type': 'Physiotherapy',
    name: `Heilkundepraxis ${config.OWNER_NAME}`,
    description: 'Praxis für Naturheilkunde und Physiotherapie in Unterwössen und Umgebung.',
    url: config.WEB_HOST,
    logo: `${config.WEB_HOST}/icons/apple-touch-icon.png`,
    email: config.EMAIL_ADDRESS,
    telephone: config.PHONE_NUMBER,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.STREET_ADDRESS,
      addressLocality: config.ADDRESS_CITY,
      addressCountry: 'DE',
      postalCode: config.POSTAL_CODE,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 47.7368196,
      longitude: 12.4556971,
    },
    openingHours,
  };
};
