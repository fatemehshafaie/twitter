<script setup>
definePageMeta({
  layout: false,
});
</script>

<template>
  <div>
    <div class="mt-4 ">
      <div class="flex justify-between items-center m-1">
        <NuxtLink to="/" class="text-sky-500 mx-3">Cancel</NuxtLink>
        <div class="flex items-center">
          <button
            @click="sendTweet()"
            class="mx-3 bg-sky-500 text-white px-4 py-2 rounded-full"
          >
            Tweet
          </button>
        </div>
      </div>
      <hr>
      <div class="flex items-baseline">
        <div class="w-10 h-9 m-3">
          <!-- <NuxtLink to="./us" -->
          <img
            class="w-full rounded-full"
            src="../assets/img/profile.JPG"
            alt=""
          />
        </div>
        <p class=" text-gray-500">Add a comment</p>

      </div>
      <div class="w-[80%] h-4/5  flex  justify-center" >
        <editor id="q" class="editor textarea w-full h-full" />
      </div>
    </div>
    <div class="flex flex-col">
      <div class="border rounded-xl mx-20 p-2 w-3/4 flex">
        <div class="w-14 h-14">
          <!-- <NuxtLink to="./us" -->
          <img
            class="w-full border rounded-full"
            src="../assets/img/prof2.jpg"
            alt=""
          />
        </div>
        <div>
          <div class="flex pt-1">
            <p class="font-bold px-2">saba</p>
            <p>@sabajam.</p>
          </div>
          <p class="my-1 mx-2">
            هعهستبمنیتمنتیسنمیامتاتایتان میتمسدمرد توییترتون درست شد؟
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class=" w-full mt-4">
    <FilePreview></FilePreview>
  </div>
</template>

<style></style>
