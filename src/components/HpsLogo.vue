<template>
<div :class="`hps-logo${bars ? ' hps-logo--bars' : ''}`" :style="`font-size:${size}`">
  <div class="hps-logo__icon">
    <q-img
      src="/logo.png"
      srcset="/logo.png 600w, /logo-2x.png 1024w, /logo-4x.png 1440w"
      placeholder-src="/logo.png"
      fetchpriority="high"
      :ratio="1"
      no-spinner
    />
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HpsLogo',

  props: {
    bars: Boolean,
    size: {
      type: String,
      default: '1em',
    },
  },
});
</script>

<style lang="scss" scoped>
.hps-logo {
  &__icon {
    left: calc(50% - 0.5em);
    position: relative;
    width: 1em;
    z-index: 100;

    &::before,
    &::after {
      border-radius: 10rem;
      content: '';
      position: absolute;
    }

    &::after {
      border: 0.0525em solid $primary;
      height: 0.825em;
      left: 0.05em;
      top: 0.475em;
      width: 0.825em;
      z-index: -1;
    }

    &::before {
      background-color: $white;
      height: 0.8875em;
      left: 0.01815em;
      top: 0.44375em;
      width: 0.8875em;
      z-index: -2;
    }
  }

  &--bars {
    font-size: 6rem;
    position: relative;

    &::before,
    &::after {
      content: '';
      height: 0.0525em;
      position: absolute;
      width: 100%;
    }

    &::before  {
      background-color: $primary;
      top: 0.675em;
    }

    &::after  {
      background-color: $secondary;
      top: 0.75875em;
    }
  }
}
</style>
