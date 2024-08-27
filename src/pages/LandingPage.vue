<template>
<q-page class="landing-page">
  <div class="q-px-md">
    <h1 class="text-h1">
      Willkommen
      <div class="text-subtitle1 q-mt-xs">In der Heilkundepraxis {{ OWNER_NAME }}</div>
    </h1>
  </div>

  <div class="row q-col-gutter-md q-pa-sm">
    <section class="col-12 col-sm-6 col-md-4">
      <div class="q-pa-sm full-height bg-accent">
        <h2 class="text-h4 q-mb-md q-mt-none">Anschrift</h2>
        <hps-address />
      </div>
    </section>

    <section class="col-12 col-sm-6 col-md-4">
      <div class="q-pa-sm full-height bg-accent">
        <h2 class="text-h4 q-mb-md q-mt-none">Kontakt</h2>

        <hps-contact color="secondary" />
      </div>
    </section>

    <section class="col-12 col-sm-6 col-md-4">
      <div class="q-pa-sm full-height bg-accent">
        <h2 class="text-h4 q-mb-md q-mt-none">Behandlungszeiten</h2>

        <hps-business-hours />
      </div>
    </section>
  </div>
</q-page>
</template>

<script lang="ts">
import { useMeta } from 'quasar';
import { defineComponent } from 'vue';

import HpsAddress from 'components/HpsAddress.vue';
import HpsBusinessHours from 'components/HpsBusinessHours.vue';
import HpsContact from 'components/HpsContact.vue';
import { OWNER_NAME } from 'src/config';
import { generateMeta, generateOrganizationJson } from 'src/services/metaUtils';

export default defineComponent({
  name: 'LandingPage',

  components: {
    HpsAddress,
    HpsBusinessHours,
    HpsContact,
  },

  setup() {
    useMeta(() => {
      const meta = generateMeta();
      meta.script = {
        ldJson: {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(generateOrganizationJson()),
        },
      };

      return meta;
    });

    return {
      OWNER_NAME,
    };
  },
});
</script>
