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
        <textarea
          type="text"
          placeholder="Add a comment"
          class="outline-none font-semibold text-xl"
        ></textarea>
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
  <div class="absolute bottom-20 mx-3 flex items-center">
    <font-awesome-icon
      class="text-sky-500 mr-3"
      :icon="['fas', 'earth-americas']"
    />
    <p class="text-sky-500">Everyone can reply</p>
  </div>
  <div class="absolute bottom-0 border-t-2 w-full mt-4">
    <button class="up icon sub1">
      <label for="upload">
        <input id="upload" class="hidden" type="file" />
        <font-awesome-icon
          class="text-sky-500 text-2xl px-4 py-5"
          :icon="['far', 'image']"
        />
      </label>
    </button>
    <button>
      <label for="upload">
        <input
          id="upload"
          class="hidden"
          type="file"
          accept="image/*"
          capture="camera"
        />

        <font-awesome-icon
          class="text-sky-500 text-2xl px-4 py-5"
          :icon="['fas', 'camera']"
        />
      </label>
    </button>
  </div>
</template>

<style></style>
