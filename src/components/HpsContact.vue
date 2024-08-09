<template>
<div class="contact">
  <div
    v-for="item in contactTypes"
    :key="item.type"
  >
    <span class="contact__type">{{ item.type }}:</span>
    <a :href="item.href" :class="`text-${color}`">{{ item.label }}</a>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
        { type: 'tel', href: 'tel:+4986416953539', label: '08641 695 35 39' },
        {
          type: 'mail',
          href: 'mailto:info@heilkundepraxis-steil.de',
          label: 'E-Mail senden',
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
