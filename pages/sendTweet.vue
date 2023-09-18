<script setup>
definePageMeta({
  layout: false,
});
let data = 0;

let hiden = ref(false);

function sendTweet() {
  axios
    .post(
      "http://192.168.203.83:4000/users/newtweets",
      {
        username: username.value,
        pwd: pwd.value,
      },
      {
        headers: {},
      }
    )
    .then(function (response) {

      console.log(response);
    })
    .catch(function (error) {
      console.log(0, error);
    });
}
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
    <div class="flex">
        <div class="w-10 h-9 m-3 mt-4">
          <!-- <NuxtLink to="./us" -->
          <img
            class="w-full rounded-full"
            src="../assets/img/profile.JPG"
            alt=""
          />
        </div>
        <div class="flex flex-col">
          <p :class="{'hidden' : hiden}" class=" text-gray-400 m-3 mx-6 absolute top-[52px]" >What's happening?</p>
        <div @click="hiden =!hiden" class=" w-96 h-full mx-6 m-3 flex justify-center" >
        <editor id="q" class="editor textarea w-full h-full" />
        </div>
        </div>

      </div>
  
  </div>
  <div class="mt-4">
    <FilePreview></FilePreview>
  </div>
</template>

<style></style>
