<script setup>
import axios from "axios";
definePageMeta({
  layout: false,
  middleware: ["authuser"],
});
let fileRef = ref(null);
let imgSrc = ref(null);
let fd = new FormData();
let body = ref("");
let hiden = ref(false);

const sendTweet = () => {
  fd.append("image", fileRef.value);
  fd.append("_body", body.value);
  axios({
    method: "post",
    url: "http://172.20.10.2:4000/users/newtwitte",
    data: fd,
    headers: {
          "Cache-Control": "no-cache",
          "cookies": useCookie("user").value,
    },
  }).then(async function (response) {
   console.log(response.data);
  });
};
let addFile = (file) => {
  fileRef.value = file[0];
  imgSrc.value = URL.createObjectURL(fileRef.value);
};
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
        <p
          :class="{ hidden: hiden }"
          class="text-gray-400 m-3 mx-6 absolute top-[52px]"
        >
          What's happening?
        </p>
        <div
          @click="hiden = !hiden"
          class="w-96 h-full mx-6 m-3 flex justify-center"
        >
          <editor v-model="body" id="q" class="editor textarea w-full h-full" />
        </div>
      </div>
    </div>
  </div>
  <div class="mt-4">
    <!-- <FilePreview v-model="image"></FilePreview>-->
    <label
      for="pic"
      class="m-6 w-[150px] h-[150px] relative overflow-hidden bg-white text-grey flex justify-center items-center text-[100px] cursor-pointer"
    >
      <font-awesome-icon
        class="text-sky-500 text-2xl px-4 py-5"
        :icon="['far', 'image']"
      />
      <img
        class="w-full object-cover absolute"
        v-if="imgSrc != null"
        :src="imgSrc"
        alt=""
      />
      <input
        class="hidden"
        @change="addFile($event.target.files)"
        ref="fileInput"
        type="file"
        name="pic"
        id="pic"
        :v-model="imgSrc"
      />
    </label>
  </div>
</template>

<style></style>
