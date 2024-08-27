<template>
<div class="address">
  <div v-if="name" class="address__name">{{ OWNER_NAME }}</div>
  <div class="address__street">{{ STREET_ADDRESS }}</div>
  <div class="address__city">{{ POSTAL_CODE }} {{ ADDRESS_CITY }}</div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
  ADDRESS_CITY,
  OWNER_NAME,
  POSTAL_CODE,
  STREET_ADDRESS,
} from 'src/config';

export default defineComponent({
  name: 'HpsAddress',

  props: {
    name: Boolean,
  },

  setup() {
    return {
      ADDRESS_CITY,
      OWNER_NAME,
      POSTAL_CODE,
      STREET_ADDRESS,
    };
  },
});
</script>
