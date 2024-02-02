<template>
  <div v-show="props.status" class="cs-invalid-feedback">
    {{ props.message }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  status: boolean;
  message: string;
}
const props = withDefaults(defineProps<Props>(), {
  status: false,
  message: "",
});
</script>

<style lang="css" scoped>
.cs-invalid-feedback {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.875em;
  color: var(--bs-form-invalid-color);
}
</style>
