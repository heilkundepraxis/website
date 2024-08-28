'use client';

import LinkButton from '@components/atoms/LinkButton';

const ServerError = () => (
  <div>
    <section id="error">
      <h1 className="text-h1">Der Inhalt ist nicht verfügbar</h1>

      <p className="mb-4">
        Es gibt gerade Probleme bei der Anzeige der Inhalte. Versuchen Sie es später noch einmal.
      </p>

      <p>
        <LinkButton href="/" label="Zur Startseite" />
      </p>
    </section>
  </div>
);

export default ServerError;
