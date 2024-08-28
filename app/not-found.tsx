import type { Metadata } from 'next';

import LinkButton from '@components/atoms/LinkButton';
import PageSection from '@components/organisms/PageSection';

export const metadata: Metadata = {
  title: 'Seite nicht gefunden',
};

const NotFoundPage = () => (
  <>
    <h1 className="text-h1">Seite nicht gefunden</h1>

    <PageSection id="nicht-gefunden" first>
      <p className="mb-4">Diese Seite existiert nicht oder ist nicht mehr verfügbar.</p>

      <LinkButton href="/" label="Zur Startseite" />
    </PageSection>
  </>
);

export default NotFoundPage;
