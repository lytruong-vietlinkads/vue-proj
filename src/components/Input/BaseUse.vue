<template>
  <!-- step 2 -->
  <div class="container">
    <h6>Base vue</h6>
    <message-error
      v-if="true"
      :status="true"
      :message="message.confirm.redirect_page"
    ></message-error>
  </div>
</template>
<script setup lang="ts">
import MessageError from "@/components/Share/MessageError.vue";
import { useCommonStore } from "@/store/common";
import { computed, ref } from "vue";
import { useRouter, useRoute, onBeforeRouteLeave } from "vue-router";
import { CATEGORY_TAG } from "@/constants/common";
import { CategoryTag } from "@/interfaces/image";
import message from "@/lang/ja";

const commonStore = useCommonStore();
console.log("commonStore", commonStore);
const router = useRouter();
console.log("router", router);
const route = useRoute();
console.log("route", route);

const parentData = computed(() => {
  let categories = Object.values(CATEGORY_TAG);
  const optionEmpty: CategoryTag = {
    key: "EMPTY",
    value: "",
    displayName: "選択してください",
    tags: [],
  };
  categories.unshift(optionEmpty);
  return categories;
});

console.log("parentData", parentData);

const shouldConfirmWhenRedirect = ref<boolean>(true);

onBeforeRouteLeave((_to, _from, next) => {
  if (shouldConfirmWhenRedirect.value) {
    const answer = window.confirm(message.confirm.redirect_page);
    return next(answer);
  }
  return next();
});
commonStore.setLoading(true);
setTimeout(() => {
  commonStore.setLoading(false);
}, 1000);
</script>

<style lang="scss" scoped></style>
