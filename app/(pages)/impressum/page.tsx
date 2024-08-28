
import Address from '@components/atoms/Address';
import Contact from '@components/atoms/Contact';
import PageSection from '@components/organisms/PageSection';

const ImprintPage = () => (
  <>
    <h1 className="text-h1">Impressum</h1>

    <PageSection id="eigentümerin" first>
      <h2 className="text-h2">Eigentümerin gemäß § 5 TMG</h2>

      <Address name />

      <h3 className="text-h3 mt-4">Kontakt</h3>
      
      <Contact />

      <p className="mt-4"><strong>Online-Streitbeilegung:</strong> Die Europäische Kommission stellt eine Plattform
        zur Online-Streitbeilegung (OS) bereit, die Sie unter <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank">ec.europa.eu/consumers/odr</a> finden.
        Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten
        zu nutzen.<br />
        Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bin
        ich nicht verpflichtet und nicht bereit.</p>
    </PageSection>

    <PageSection id="haftung">
      <h2 className="text-h2">Haftung für Inhalte</h2>

      <p><strong>Haftungsausschluss:</strong> Die Inhalte dieses Onlineangebotes wurden sorgfältig
        und nach meinem aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und
        entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende
        Informationen (z.B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende
        Belehrungen von Verbrauchern) handelt. Ich behalte mir vor, die Inhalte vollständig oder
        teilweise zu ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben.
        Alle Angebote sind freibleibend und unverbindlich.</p>

      <p className="mt-2"><strong>Links auf fremde Webseiten:</strong> Die Inhalte fremder Webseiten,
        auf die ich direkt oder indirekt verweise, liegen außerhalb meines Verantwortungsbereiches und ich
        mache sie mir nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in
        den verlinkten Webseiten aufrufbaren Informationen entstehen, übernehme ich keine
        Verantwortung.</p>

      <p className="mt-2"><strong>Urheberrechte und Markenrechte:</strong> Alle auf dieser Website
        dargestellten Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die
        jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung,
        Vervielfältigung usw. unterliegen meinen Rechten oder den Rechten der jeweiligen Urheber
        bzw. Rechteinhaber.</p>

      <p className="mt-2"><strong>Hinweise auf Rechtsverstöße:</strong> Sollten Sie innerhalb meines
        Internetauftritts Rechtsverstöße bemerken, bitte ich Sie mich auf diese hinzuweisen. Ich werde
        rechtswidrige Inhalte und Links nach Kenntnisnahme unverzüglich entfernen.</p>
    </PageSection>
  </>
);

export default ImprintPage;
