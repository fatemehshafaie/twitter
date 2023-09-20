<script setup>
import axios from "axios";

definePageMeta({
  layout: false,
  middleware: ["authuser"],
});
const alltweet = ref([]);
const isActive = ref(true);
axios
  .get("http://172.20.10.2:4000/", {
    headers: {
      "Cache-Control": "no-cache",
      cookies: useCookie("user").value,
    },
  })
  .then(function (response) {
    // handle success
    alltweet.value=response.data.body
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
</script>
<template>
  <NuxtLayout name="default">
    <template #main>
      <div class="mt-[8vh]"></div>
      <TweetCard       v-for="(data,index) in alltweet"
      :key="index"
      :id="data.id"
      :username="data.username"
      :profile_image="data.profile_image"
      :liked="data.liked"
      :body="data.body"
      :likes="data.likes"
      :NumberOfReplies="data.NumberOfReplies"
      :twitt_image="data.twitt_image" />
      <button
        class="fixed text-white bg-sky-500 w-14 h-14 rounded-full right-2 bottom-16"
      >
        <NuxtLink to="/sendTweet">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </NuxtLink>
      </button>
      <div class="mb-[8vh]"></div>
    </template>
  </NuxtLayout>
</template>

<style></style>
