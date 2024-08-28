import Script from 'next/script';

import { OWNER_NAME } from '@app/config';
import Address from '@components/atoms/Address';
import Contact from '@components/atoms/Contact';
import OpeningHours from '@components/atoms/OpeningHours';
import { generateOrganizationJson, generatePageMeta } from '@lib/seo';

export const metadata = generatePageMeta('/');

const HomePage = () => {
  const jsonLd = generateOrganizationJson();

  return (
    <>
      <div>
        <section id="willkommen">
          <h1 className="text-h1 mb-1">Willkommen</h1>
          <p className="mb-6 sm:mb-10">in der Heilkundepraxis von {OWNER_NAME}</p>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-primary-200 p-2">
          <h2 className="text-h2">Anschrift</h2>

          <Address />
        </div>

        <div className="bg-primary-200 p-2">
          <h2 className="text-h2">Kontakt</h2>

          <Contact color="text-secondary-500 hover:text-secondary-600" />
        </div>

        <div className="bg-primary-200 p-2">
          <h2 className="text-h2">Behandlungszeiten</h2>

          <OpeningHours />
        </div>
      </div>

      <Script type="application/ld+json" id="jsonld">{JSON.stringify(jsonLd)}</Script>
    </>
  );
};

export default HomePage;
