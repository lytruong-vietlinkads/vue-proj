<template>
  <router-view />
  <loading-overlay :status="commonStore.loading" />
</template>

<script setup lang="ts">
import { provide } from "vue";
import { useCommonStore } from "@/store/common";
import LoadingOverlay from "@/components/LoadingOverlay.vue";
import { useI18n } from "vue-i18n";
const { t } = useI18n({
  inheritLocale: true,
});
const commonStore = useCommonStore();
provide('lang', t);
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
