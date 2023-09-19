<script setup>
import axios from "axios";
definePageMeta({
  layout: false,
});
const userInfo = ref({});
const tweets = ref([]);
axios
  .get("http://172.20.10.2:4000/users/usrinfo", {
    headers: {
      "Cache-Control": "no-cache",
      cookies: useCookie("user").value,
    },
  })
  .then(function (response) {
    userInfo.value = response.data.body;
    tweets.value = response.data.body.twittes;
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
let count = ref(500);
</script>

<template #main>
  <div class="w-full h-[200px]">
    <img class="h-full w-full" src="../assets/img/header.jpg" alt="" />
  </div>
  <div
    class="mx-4 flex justify-center absolute top-44 bg-white rounded-full w-[80px] h-[80px]"
  >
    <div class="m-1 w-[75px] h-[75px]">
      <!-- <NuxtLink to="./us" -->
      <img
        :src="'http://172.20.10.2:4000/' + userInfo.profile_picture"
        class="w-full rounded-full"
        alt=""
      />
    </div>
  </div>
  <div class="flex justify-end">
    <NuxtLink
      to="/editUser"
      class="border-sky-500 border rounded-full py-1 px-4 m-2 mt-3 font-semibold text-sky-500"
      >Edit profile
    </NuxtLink>
  </div>
  <div class="flex flex-col mx-4 justify-between gap-2">
    <p class="font-bold">{{ userInfo.username }}</p>
    <p class="text-gray-400">@{{ userInfo.username }}</p>
    <p class="">this is bio</p>
    <div class="flex">
      <div class="flex items-center">
        <p class="text-sm font-semibold pr-2">{{ userInfo.following }}</p>
        <p class="text-gray-500">Following</p>
      </div>
      <div class="flex items-center">
        <p class="text-sm font-semibold px-2">{{ userInfo.follower }}</p>
        <p class="text-gray-500">followers</p>
      </div>
    </div>
  </div>
  <div class="flex justify-between border-b-2">
    <a
      class="text-sky-500 font-semibold p-4 text-xl border-b-2 border-sky-500"
      href=""
      >Tweets</a
    >
    <a class="text-gray-500 font-semibold p-4 text-xl" href=""
      >Tweets & replies</a
    >
    <a class="text-gray-500 font-semibold p-4 text-xl" href="">Media</a>
    <a class="text-gray-500 font-semibold p-4 text-xl" href="">Likes</a>
  </div>
  <div class="mb-[8vh]">
    <TweetCard
      v-for="(twittes,index) in tweets"
      :key="index"
      :id="twittes.id"
      :prof="userInfo.profile_picture"
      :liked="twittes.liked"
      :body="twittes.body"
      :likes="twittes.likes"
      :NumberOfReplies="twittes.NumberOfReplies"
    />
  </div>
  <TheFooter />
</template>

<style></style>
