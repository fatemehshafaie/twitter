<script setup>
import axios from "axios";
import Swal from "sweetalert2";

definePageMeta({
  layout: false,
});
// definePageMeta({
//   middleware: [
//     'auth.js'
//   ]
// });
const username = ref("");
const pwd = ref("");
function run() {
  axios
    .post(
      "http://172.20.10.2:4000/users/login",
      {
        "username": username.value,
        "pwd": pwd.value,
      },
      {
        headers: {},
      }
    )
    .then(function (response) {
      document.cookie = "user=" + response.data.token;
      if (response.data.status == true) {
        Swal.fire("Good job!", response.data.message, "success");
        return navigateTo('/')
      } else {
        Swal.fire({
          icon: "error",
          text: response.data.message,
        });
      }
      console.log(response);
    })
    .catch(function (error) {
      console.log(0, error);
    });
}
</script>

<template>
  <div class="container">
    <!-- header -->
    <div class="flex justify-between items-center m-3">
      <NuxtLink to="/user" class="text-sky-500 text-xl"> Cancel </NuxtLink>
      <font-awesome-icon
        class="text-sky-500 text-4xl m-3"
        :icon="['fab', 'twitter']"
      />
      <font-awesome-icon
        class="text-sky-500 text-3xl m-3"
        :icon="['fas', 'ellipsis']"
      />
    </div>
    <!--form -->
    <h1 class="flex justify-center font-bold text-3xl my-[6vh]">Login</h1>
    <div class="flex flex-col w-full">
      <input
        v-model="username"
        class="outline-none m-3 py-3"
        type="text"
        placeholder="username"
      />
      <div class="w-full ml-3 h-[1px] bg-gray-300"></div>
      <input
        v-model="pwd"
        type="password"
        class="outline-none m-3 py-3"
        placeholder="Password"
      />
      <div class="w-full ml-3 h-[1px] bg-gray-400"></div>
    </div>

    <!-- footer -->
    <div
      class="flex justify-between items-center absolute bottom-0 w-full border-t-2"
    >
      <NuxtLink class="text-sky-500 m-2"> Forgot your password? </NuxtLink>
      <button
        @click="run()"
        class="text-white bg-sky-500 rounded-full px-4 p-2 m-3"
      >
        login
      </button>
    </div>
  </div>
</template>

<style></style>
