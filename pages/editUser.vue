<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <header class="flex justify-between m-5 my-6 bg-white">
    <NuxtLink to="/User" class="text-sky-500 text-xl">Cancel</NuxtLink>
    <p class="font-bold text-xl">Edit profile</p>
    <button class="text-xl text-gray-500">save</button>
  </header>
  <button class="relative w-full h-[200px] bg-gray-500">
    <label for="add">
      <input id="add" class="hidden" type="file" />
      <font-awesome-icon
        class="absolute top-1/2 right-1/2 text-white text-3xl"
        :icon="['fas', 'camera']"
      />
    </label>
  </button>
  <div class="w-full">
    <div
      class="mx-4 flex justify-center absolute top-56 bg-white rounded-full w-[80px] h-[80px]"
    >
      <button class="m-1 w-[75px] h-[75px]">
        <!-- <NuxtLink to="./us" -->
        <label for="addphoto">
          <input class="hidden" type="file" name="" id="addphoto" />
          <img
            class="w-full rounded-full brightness-[40%]"
            src="../assets/img/profile.JPG"
            alt=""
          />
          <font-awesome-icon
            class="absolute top-[30%] right-[31%] text-white text-3xl"
            :icon="['fas', 'camera']"
          />
        </label>
      </button>
    </div>
  </div>
  <div class="flex flex-col mt-[7vh] border-t-2 justify-between gap-2">
    <div class="flex ">
      <p class="p-3 font-bold w-28">Name</p>
      <p class=" text-sky-500 py-3">ftmh</p>
    </div>
    <hr />
    <div class="flex h-[10vh]">
      <p class="p-3 font-bold w-28">Bio</p>
      <p class=" text-sky-500 py-3">somthing</p>
    </div>
    <hr />
    <div class="flex ">
      <p class="p-3 font-bold w-28">Location</p>
      <p class=" text-sky-500 py-3">کرمان</p>
    </div>
    <hr />
    <div class="flex">
      <p class="p-3 font-bold w-28">Bitrth date</p>
      <p class=" text-sky-500 py-3">june 13,2002</p>
    </div>
    <hr>
  </div>
</template>

<style></style>
