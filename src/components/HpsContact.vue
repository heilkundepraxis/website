<template>
<div class="contact">
  <div
    v-for="item in contactTypes"
    :key="item.type"
    class="row"
  >
    <div class="contact__type col-auto">{{ item.type }}:</div>
    <div class="col">
      <a :href="item.href" :class="`text-${color}`">{{ item.label }}</a>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { EMAIL_ADDRESS, PHONE_NUMBER } from 'src/config';

export default defineComponent({
  name: 'HpsContact',

  props: {
    color: {
      type: String,
      default: 'primary',
    },
  },

  setup() {
    return {
      contactTypes: [
        { type: 'tel', href: `tel:${PHONE_NUMBER}`, label: '08641 695 35 39' },
        {
          type: 'mail',
          href: `mailto:${EMAIL_ADDRESS}`,
          label: EMAIL_ADDRESS,
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.contact {
  &__type {
    display: inline-block;
    width: 2.75rem;
  }
}
</style>
