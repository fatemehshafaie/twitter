<script setup>
definePageMeta({
  layout: false,
});
let data=0;


function sendTweet() {}

</script>

<template #main>
  <div class="mt-4">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class="text-sky-500 mx-3">Cancel</NuxtLink>
      <div class="flex items-center">
        <p class="text-sky-500 mx-3 font-semibold">Draft</p>
        <button
          @click="sendTweet()"
          class="mx-3 bg-sky-500 text-white px-4 py-2 rounded-full"
        >
          Tweet
        </button>
      </div>
    </div>
    <div class="flex items-center">
      <div class="w-10 h-9 m-3">
        <img
          class="w-full rounded-full"
          src="../assets/img/profile.JPG"
          alt=""
        />
      </div>
      <p class=" text-gray-500">What's happaning?</p>
    </div>
    <div class="w-[80%] h-4/5 m-5 flex  justify-center" >
        <editor id="q" class="editor textarea w-full h-full" />
      </div>
  </div>
  <div class=" w-full mt-4">
    <FilePreview></FilePreview>
  </div>

</template>

<style></style>
