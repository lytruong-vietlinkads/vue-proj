<template>
  <div>
    <h1>Account Create</h1>
    <div class="form-group">
      <div for="exampleInputEmail1">Email address</div>
      <input
        v-model="user.email"
        type="email"
        class="form-control"
        aria-describedby="emailHelp"
        placeholder="Enter email"
      />
      <small id="emailHelp" class="form-text text-muted"
        >We'll never share your email with anyone else.</small
      >
    </div>
    <div class="form-group">
      <div>Nickname</div>
      <input
        v-model="user.nickname"
        type="input"
        class="form-control"
        placeholder="Nickname"
      />
    </div>
    <button class="btn btn-primary" @click="submit">Submit</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "AccountCreate",
};
</script>

<script setup lang="ts">
import { ref } from "vue";
import { createUser } from "../services";
import { useCommonStore } from "@/store/common";
import { User } from "../interfaces";

const commonStore = useCommonStore();
const user = ref<User>({
  id: null,
  nickname: "",
  email: "",
});
const submit = async () => {
  try {
    commonStore.setLoading(true);
    const res = await createUser(user.value);
    console.log("res", res);
  } catch (error) {
    console.log("error", error);
  } finally {
    commonStore.setLoading(false);
  }
};
</script>

<style scoped></style>
