import * as config from '@app/config';
import { isProd } from '@app/utils';

const wrapJson = (type: string, json: any) => ({
  '@context': 'https://schema.org',
  '@type': type,
  ...json,
});

type BreadcrumbData = {
  page?: string;
  title: string;
};

export const generateBreadcrumbJson = (breadcrumbs: BreadcrumbData[]) => wrapJson(
  'BreadcrumbList',
  {
    itemListElement: breadcrumbs.map((data, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: data.title,
      item: data.page && `${config.WEB_HOST}${data.page}`,
    })),
  },
);

export const generateOrganizationJson = () => {
  const openingHours = config.OPENING_HOURS
    .map((bh) => !!bh.opens && `${bh.day} ${bh.opens}-${bh.closes}`)
    .filter((d) => !!d) as string[];

  return wrapJson(
    'Physiotherapy',
    {
      name: `Heilkundepraxis ${config.OWNER_NAME}`,
      description: 'Praxis für Naturheilkunde und Physiotherapie in Unterwössen und Umgebung.',
      url: config.WEB_HOST,
      logo: `${config.WEB_HOST}/icons/apple-touch-icon.png`,
      email: config.EMAIL_ADDRESS,
      telephone: config.PHONE_NUMBER,
      priceRange: '$$',
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
    },
  );
};

export const generatePageMeta = (identifier: string) => {
  const languages: Record<string, string> = {
    de: `${config.WEB_HOST}${identifier}`,
  };

  return {
    alternates: {
      canonical: languages.de,
      languages,
    },
    robots: {
      index: isProd(),
    },
  };
};
