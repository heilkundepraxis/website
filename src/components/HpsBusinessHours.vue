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

export default defineComponent({
  name: 'HpsBusinessHours',

  setup() {
    return {
      businessHours: [
        { day: 'Montag', hours: '09:00 - 19:00' },
        { day: 'Dienstag', hours: '08:00 - 17:00' },
        { day: 'Mittwoch', hours: '08:00 - 12:00' },
        { day: 'Donnerstag', hours: '09:00 - 19:00' },
        { day: 'Freitag' },
      ],
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
