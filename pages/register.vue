<script setup>
import axios from "axios";
import Swal from "sweetalert2";
definePageMeta({
  layout: false,
});
const email = ref("");
const username = ref("");
const pwd = ref("");
function run() {
  axios
    .post(
      "http://localhost:4000/users/register",
      {
        username: username.value,
        pwd: pwd.value,
        email: email.value,
      },
      {
        headers: {},
      }
    )
    .then(function (response) {
      if (response.data.status == true) {
        Swal.fire("Goode job!", response.data.message, "success");
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
    <h1 class="flex justify-center font-bold text-3xl my-[6vh]">sign up</h1>
    <div class="flex flex-col w-full">
      <input
        v-model="email"
        class="outline-none m-3 py-3"
        type="text"
        placeholder="email"
      />
      <div class="w-full ml-3 h-[1px] bg-gray-300"></div>
      <input
        v-model="username"
        type="text"
        class="outline-none m-3 py-3"
        placeholder="username"
      />
      <div class="w-full ml-3 h-[1px] bg-gray-400"></div>
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
      <NuxtLink class="text-sky-500 m-2"> already have account? </NuxtLink>
      <button
        @click="run()"
        class="text-white bg-sky-500 rounded-full px-4 p-2 m-3"
      >
        sign up
      </button>
    </div>
  </div>
</template>

<style></style>
