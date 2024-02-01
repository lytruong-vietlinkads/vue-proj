<template>
  <Teleport to="body">
    <div v-if="status" class="overlay show"></div>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  status: boolean;
}
withDefaults(defineProps<Props>(), {
  status: false,
});
</script>

<style lang="css" scoped>
.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  visibility: hidden;
}

@-webkit-keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
@keyframes load7 {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}

.show {
  visibility: visible;
}
.overlay {
  opacity: 0;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;
}
.overlay.show {
  opacity: 1;
}
</style>
