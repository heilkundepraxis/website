<template>
  <div class="fullscreen bg-accent text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 20vh">
        404
      </div>

      <div class="text-h2" style="opacity:.4">
        Seite nicht gefunden
      </div>

      <q-btn
        class="q-mt-xl"
        color="primary"
        text-color="dark"
        unelevated
        to="/"
        label="Zur Startseite"
        no-caps
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',

  preFetch({ ssrContext }) {
    if (ssrContext) {
      ssrContext.res.statusCode = 404;
    }
  },
});
</script>
