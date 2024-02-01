<template>
  <router-view />
  <loading-overlay :status="commonStore.loading"/>
</template>

<script setup lang="ts">
import { useCommonStore } from "@/store/common";
import LoadingOverlay from "@/components/Share/LoadingOverlay.vue";
const commonStore = useCommonStore();
// provide()
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
