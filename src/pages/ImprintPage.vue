<template>
  <div class="q-px-md">
    <h1 class="text-h1">Impressum</h1>

    <h2 class="text-h2">Eigentümer gemäß § 5 TMG</h2>
    <p>Elfriede Steil<br />
      Postweg 4<br />
      83246 Unterwössen</p>

    <h3>Kontakt</h3>
    <p><hps-contact /></p>

    <p><strong>Online-Streitbeilegung:</strong> Die Europäische Kommission stellt eine Plattform
      zur Online-Streitbeilegung (OS) bereit, die Sie unter <a
        href="https://ec.europa.eu/consumers/odr"
        target="_blank">ec.europa.eu/consumers/odr</a> finden.
      Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten
      zu nutzen.<br />
      Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle bin
      ich nicht verpflichtet und nicht bereit.</p>

    <h2>Haftung für Inhalte</h2>

    <p><strong>Haftungsausschluss:</strong> Die Inhalte dieses Onlineangebotes wurden sorgfältig
      und nach meinem aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und
      entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende
      Informationen (z.B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende
      Belehrungen von Verbrauchern) handelt. Ich behalte mir vor, die Inhalte vollständig oder
      teilweise zu ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben.
      Alle Angebote sind freibleibend und unverbindlich.</p>

    <p><strong>Links auf fremde Webseiten:</strong> Die Inhalte fremder Webseiten, auf die ich
      direkt oder indirekt verweise, liegen außerhalb meines Verantwortungsbereiches und ich
      mache sie mir nicht zu Eigen. Für alle Inhalte und Nachteile, die aus der Nutzung der in
      den verlinkten Webseiten aufrufbaren Informationen entstehen, übernehme ich keine
      Verantwortung.</p>

    <p><strong>Urheberrechte und Markenrechte:</strong> Alle auf dieser Website dargestellten
      Inhalte, wie Texte, Fotografien, Grafiken, Marken und Warenzeichen sind durch die
      jeweiligen Schutzrechte (Urheberrechte, Markenrechte) geschützt. Die Verwendung,
      Vervielfältigung usw. unterliegen meinen Rechten oder den Rechten der jeweiligen Urheber
      bzw. Rechteinhaber.</p>

    <p><strong>Hinweise auf Rechtsverstöße:</strong> Sollten Sie innerhalb meines Internetauftritts
      Rechtsverstöße bemerken, bitte ich Sie mich auf diese hinzuweisen. Ich werde rechtswidrige
      Inhalte und Links nach Kenntnisnahme unverzüglich entfernen.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HpsContact from 'components/HpsContact.vue';

export default defineComponent({
  name: 'ImprintPage',

  components: {
    HpsContact,
  },
});
</script>
