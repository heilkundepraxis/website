import Link from 'next/link';

import Address from '@components/atoms/Address';
import BulletList from '@components/atoms/BulletList';
import PageSection from '@components/organisms/PageSection';

const PrivacyPage = () => (
  <>
    <h1 className="text-h1">Datenschutz</h1>

    <PageSection id="datenschutz" first>
      <h2 className="text-h2">Inhaltsverzeichnis</h2>

      <BulletList clear>
          <Link href="#verantwortliche">Verantwortliche</Link>
          <Link href="#widerruf">Widerruf Ihrer Einwilligung zur Datenverarbeitung</Link>
          <Link href="#beschwerde">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</Link>
          <Link href="#datenuebertragbarkeit">Recht auf Datenübertragbarkeit</Link>
          <Link href="#auskunft">Recht auf Auskunft, Berichtigung, Sperrung und Löschung</Link>
          <Link href="#ssl">SSL- bzw. TLS-Verschlüsselung</Link>
          <Link href="#logs">Server-Log-Dateien</Link>
          <Link href="#kontakt">Kontaktformular</Link>
          <Link href="#cookies">Cookies</Link>
      </BulletList>
    </PageSection>

    <PageSection id="verantwortliche">
      <h2 className="text-h2">Verantwortliche</h2>

      <Address name />

      <p className="mt-4">
        <Link href="/impressum">Impressum</Link>
      </p>
    </PageSection>

    <PageSection id="widerruf">
      <h2 className="text-h2">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h2>

      <p>
        Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung
        möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich.
        Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis
        zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
      </p>
    </PageSection>

    <PageSection id="beschwerde">
      <h2 className="text-h2">Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</h2>

      <p>
        Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein
        Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde
        bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des
        Bundeslandes, in dem sich der Sitz meines Unternehmens befindet. Der folgende Link
        stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <Link
          href="https://www.bfdi.bund.de" target="_blank">bfdi.bund.de</Link>
      </p>
    </PageSection>

    <PageSection id="datenuebertragbarkeit">
      <h2 className="text-h2">Recht auf Datenübertragbarkeit</h2>

      <p>
        Ihnen steht das Recht zu, Daten, die ich auf Grundlage Ihrer Einwilligung oder in
        Erfüllung eines Vertrags automatisiert verarbeite, an Sie oder an Dritte aushändigen zu
        lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die
        direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies
        nur, soweit es technisch machbar ist.
      </p>
    </PageSection>

    <PageSection id="auskunft">
      <h2 className="text-h2">Recht auf Auskunft, Berichtigung, Sperrung und Löschung</h2>

      <p>
        Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf
        unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der
        Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf
        Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren
        Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum
        aufgeführten Kontaktmöglichkeiten an mich wenden.
      </p>
    </PageSection>

    <PageSection id="ssl">
      <h2 className="text-h2">SSL- bzw. TLS-Verschlüsselung</h2>

      <p>
        Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an
        mich als Seitenbetreiber senden, nutzt meine Website eine SSL- bzw. TLS-Verschlüsselung.
        Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar.
        Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers
        und am Schloss-Symbol in der Browserzeile.
      </p>
    </PageSection>

    <PageSection id="logs">
      <h2 className="text-h2">Server-Log-Dateien</h2>

      <p className="mb-2">
        In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch
        Informationen, die Ihr Browser automatisch an mich übermittelt. Dies sind:
      </p>

      <BulletList bullets={[
        'Besuchte Seite auf meiner Domain',
        'Datum und Uhrzeit der Serveranfrage',
        'Browsertyp und Browserversion',
        'Verwendetes Betriebssystem',
        'Referrer URL',
        'Hostname des zugreifenden Rechners',
        'IP-Adresse',
      ]} />

      <p className="mt-2">
        Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage
        der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten
        zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.
      </p>
    </PageSection>

    <PageSection id="kontakt">
      <h2 className="text-h2">Kontaktformular</h2>

      <p className="mb-2">
        Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten
        gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen
        bereitzustehen. Eine Weitergabe dieser Daten findet ohne Ihre Einwilligung nicht statt.
      </p>

      <p className="mb-2">
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt ausschließlich
        auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits
        erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose
        Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
      </p>

      <p>
        Über das Kontaktformular übermittelte Daten verbleiben bei mir, bis Sie mich zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder keine Notwendigkeit der
        Datenspeicherung mehr besteht. Zwingende gesetzliche Bestimmungen – insbesondere
        Aufbewahrungsfristen – bleiben unberührt.
      </p>
    </PageSection>

    <PageSection id="cookies">
      <h2 className="text-h2">Cookies</h2>

      <p className="mb-2">
        Meine Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf
        Ihrem Endgerät speichert. Cookies helfen mir dabei, mein Angebot nutzerfreundlicher,
        effektiver und sicherer zu machen.
      </p>

      <p className="mb-2">
        Einige Cookies sind “Session-Cookies.” Solche Cookies werden nach Ende Ihrer
        Browser-Sitzung von selbst gelöscht. Hingegen bleiben andere Cookies auf Ihrem Endgerät
        bestehen, bis Sie diese selbst löschen. Solche Cookies helfen mir, Sie bei Rückkehr auf
        meine Website wiederzuerkennen.
      </p>

      <p className="mb-2">
        Mit einem modernen Webbrowser können Sie das Setzen von Cookies überwachen, einschränken
        oder unterbinden. Viele Webbrowser lassen sich so konfigurieren, dass Cookies mit dem
        Schließen des Programms von selbst gelöscht werden. Die Deaktivierung von Cookies kann
        eine eingeschränkte Funktionalität meiner Website zur Folge haben.
      </p>

      <p>
        Das Setzen von Cookies, die zur Ausübung elektronischer Kommunikationsvorgänge oder der
        Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorb) notwendig
        sind, erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Als Betreiber dieser Website
        habe ich ein berechtigtes Interesse an der Speicherung von Cookies zur technisch
        fehlerfreien und reibungslosen Bereitstellung meiner Dienste. Sofern die Setzung anderer
        Cookies (z.B. für Analyse-Funktionen) erfolgt, werden diese in dieser Datenschutzerklärung
        separat behandelt.
      </p>
    </PageSection>
  </>
);

export default PrivacyPage;
