<script setup>
definePageMeta({
  layout: false,
});
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
    <input
      class="outline-none m-3 py-3"
      type="text"
      placeholder="Phone,email or username"
    />
    <div class="w-full ml-3 h-[1px] bg-gray-300"></div>
    <input
      type="password"
      class="outline-none m-3 py-3"
      placeholder="Password"
    />
    <div class="w-full ml-3 h-[1px] bg-gray-400"></div>
    <!-- footer -->
    <div
      class="flex justify-between items-center absolute bottom-0 w-full border-t-2"
    >
      <NuxtLink class="text-sky-500 m-2"> Forgot your password? </NuxtLink>
      <NuxtLink class="text-white bg-sky-500 rounded-full px-4 p-2 m-3">
        login
      </NuxtLink>
    </div>
  </div>
</template>

<style></style>
