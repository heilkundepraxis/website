<template>
  <q-layout view="hhh lpr fff">
    <div class="row q-my-xl container">
      <div class="col-12 col-xl-10 offset-xl-1">
        <div class="main-content">
          <router-link to="/" class="title">
            <div class="title__name">Elfriede Steil</div>
            <div class="title__profession">
              Heilpraktikerin &amp; Physiotherapeutin
            </div>
          </router-link>
          <div class="q-my-md logo-bar">
            <HpsLogo size="1em" bars />
          </div>
          <q-page-container>
            <router-view />
          </q-page-container>
        </div>

        <div class="footer q-px-md q-mt-xl">
          <div class="q-col-gutter-x-md">
            <router-link to="/impressum">Impressum</router-link>
            <router-link to="/datenschutz">Datenschutz</router-link>
          </div>

          <p class="q-pt-sm" style="font-size:0.75rem">&copy; {{ new Date().getFullYear() }}
            Elfriede Steil.
            Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import HpsLogo from 'components/HpsLogo.vue';

export default defineComponent({
  name: 'RawLayout',

  components: {
    HpsLogo,
  },

  props: {
    page: String,
  },

  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.title {
  &,
  &:hover {
    text-decoration: none;
  }

  &__name,
  &__profession {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  &__name {
    font-size: 2.25rem;
    font-weight: bold;
    letter-spacing: normal;
    line-height: 1.25;
    margin-bottom: 0;
    margin-top: 0;

    @media screen and (max-width: $breakpoint-sm-max) {
      font-size: 1.375rem;
    }
  }

  &__profession {
    color: $dark;
    font-size: 1.675rem;
    font-weight: normal;
    line-height: 1.25;
    margin-bottom: 0;

    @media screen and (max-width: $breakpoint-sm-max) {
      font-size: 1.0625rem
    }
  }
}

.logo-bar {
  font-size: 4rem;

  @media screen and (min-width: $breakpoint-sm-min) {
    font-size: 6rem;
  }
}

.main-content {
  min-height: 100vh;
}

.footer {
  font-size: 0.875rem;
}
</style>
