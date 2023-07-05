<script setup>
// const isShow =ref(false);
</script>

<template>
  <div class="container fixed top-0 ">
    <div class="flex justify-between items-center border-b-2">
      <button class="w-10 h-10 m-3">
        <!-- <NuxtLink to="./us" -->
        <img
          class="w-full rounded-full"
          src="../assets/img/profile.JPG"
          alt=""
        />
      </button>
      <font-awesome-icon
        class="text-sky-400 text-3xl m-3"
        :icon="['fab', 'twitter']"
      />
      <font-awesome-icon
        class="text-sky-400 text-3xl m-3"
        :icon="['fas', 'bars']"
      />
    </div>
  </div>
</template>

<style></style>
