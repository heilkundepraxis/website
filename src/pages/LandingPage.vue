<template>
<div class="row q-col-gutter-md q-pa-sm">
  <section class="col-12 col-sm-6 col-md-4">
    <div class="q-pa-sm full-height bg-accent">
      <div class="text-h4 q-mb-md">Anschrift</div>
      <hps-address />
    </div>
  </section>

  <section class="col-12 col-sm-6 col-md-4">
    <div class="q-pa-sm full-height bg-accent">
      <div class="text-h4 q-mb-md">Kontakt</div>

      <hps-contact color="secondary" />
    </div>
  </section>

  <section class="col-12 col-sm-6 col-md-4">
    <div class="q-pa-sm full-height bg-accent">
      <div class="text-h4 q-mb-md">Behandlungszeiten</div>

      <hps-business-hours />
    </div>
  </section>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HpsAddress from 'components/HpsAddress.vue';
import HpsBusinessHours from 'components/HpsBusinessHours.vue';
import HpsContact from 'components/HpsContact.vue';

export default defineComponent({
  name: 'LandingPage',

  components: {
    HpsAddress,
    HpsBusinessHours,
    HpsContact,
  },
});
</script>
