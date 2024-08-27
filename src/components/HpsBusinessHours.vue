<template>
<div class="business-hours">
  <div
    v-for="item in businessHours"
    :key="item.day"
    class="row"
  >
    <div class="business-hours__day col-auto">{{ item.day.substring(0, 2) }}<span
      class="gt-xs">{{ item.day.substring(2) }}</span>:</div>
    <div class="col">
      <div v-if="item.hours">
        {{ item.hours }}<span v-if="!$q.screen.md"> Uhr</span>
      </div>
      <div v-else>geschlossen</div>
    </div>
  </div>
  <div class="business-hours__notes">
    <strong>Termin nur nach Vereinbarung</strong>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { BUSINESS_HOURS } from 'src/config';

export default defineComponent({
  name: 'HpsBusinessHours',

  setup() {
    const dayMapper = [
      'Sonntag',
      'Montag',
      'Dienstag',
      'Mittwoch',
      'Donnerstag',
      'Freitag',
      'Samstag',
      'Sonntag',
    ];

    return {
      businessHours: BUSINESS_HOURS.map((bh) => ({
        day: dayMapper[bh.day],
        hours: bh.opens && `${bh.opens} - ${bh.closes}`,
      })),
    };
  },
});
</script>

<style lang="scss" scoped>
.business-hours {
  &__day {
    display: inline-block;
    width: 2.75rem;

    @media screen and (min-width: $breakpoint-sm-min) {
      width: 6.25rem;
    }
  }

  &__notes {
    padding-top: 0.5rem;
  }
}
</style>
