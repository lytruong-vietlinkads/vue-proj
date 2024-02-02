<template>
  <div>
    <h1>Account List</h1>
    <p>Welcome to your account</p>
    <div v-for="user in userList">
      {{ user.id }} {{ user.nickname }} {{ user.email }}
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AccountList",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import { getListUser } from "../services";
import { useCommonStore } from "@/store/common";
import { User } from "../interfaces";
import { useRoute } from "vue-router";

const route = useRoute();
console.log("route", route);
const commonStore = useCommonStore();
const userList = ref<Array<User>>([]);
const init = async () => {
  try {
    commonStore.setLoading(true);
    userList.value = await getListUser();
    console.log("userList.value", userList.value);
  } catch (error) {
    console.log("error", error);
  } finally {
    commonStore.setLoading(false);
  }
};
init();
</script>

<style scoped></style>
