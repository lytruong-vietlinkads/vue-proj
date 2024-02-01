<template>
  <div>
    <h1>Account View</h1>
    <p>Welcome to your account, {{ accountInfo.username }}!</p>
    <div>
      <!-- Nội dung của view tài khoản -->
      <button @click="logout">Logout</button>
    </div>
    <base-use />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseUse from "@/components/Input/BaseUse.vue";

const accountInfo = ref({
  username: "exampleUser",
  email: "example@example.com",
});

const logout = () => {
  console.log("Logging out...");
};
</script>

<style scoped></style>
