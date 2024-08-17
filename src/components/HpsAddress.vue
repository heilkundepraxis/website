<template>
<div class="address">
  <div v-if="name" class="address__name">Elfriede Steil-Schächinger</div>
  <div class="address__street">Postweg 4</div>
  <div class="address__city">83246 Unterwössen</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HpsAddress',

  props: {
    name: Boolean,
  },
});
</script>
