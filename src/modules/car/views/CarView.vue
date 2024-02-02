<template>
  <div>
    <h1>Carrrrrr View</h1>
    <p>Welcome to your account, {{ accountInfo.username }}!</p>
    <div>
      <!-- Nội dung của view tài khoản -->
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const accountInfo = ref({
  username: "exampleUser",
  email: "example@example.com",
});

const logout = () => {
  console.log("Logging out...");
};
</script>

<style scoped></style>
