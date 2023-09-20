<script setup>
import axios from 'axios';
definePageMeta({
  layout: false,
});
let fd = new FormData();
let fileRef = ref(null);
let imgSrc = ref(null);
let username=ref("");
let email=ref("");
let userInfo=ref({});

let addFile = (file) => {
  fileRef.value = file[0];
  imgSrc.value = URL.createObjectURL(fileRef.value);
};
axios
  .get("http://172.20.10.2:4000/users/usrinfo", {
    headers: {
      "Cache-Control": "no-cache",
      'cookies': useCookie("user").value,
    },
  })
  .then(function (response) {
    userInfo.value = response.data.body;
    username.value=response.data.body.username;
    email.value=response.data.body.username;
    // fileRef.value=response.data.body.profile_picture;
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

const changeInfo = () => {
  console.log(fileRef.value);
  fd=new FormData();
  console.log(121212);
  fd.append("profile_image", fileRef.value);
  fd.append("username", username.value);
  fd.append("email", email.value);
  axios({
    method: "put",
    url: "http://172.20.10.2:4000/users/editusrinfo",
    data: fd,
    headers: {
      "Cache-Control": "no-cache",
      'cookies': useCookie("user").value,
    },
  }).then(async function (response) {
    console.log(response.data);
  });
};
</script>

<template>
  <header class="flex justify-between m-5 my-6 bg-white">
    <NuxtLink to="/User" class="text-sky-500 text-xl">Cancel</NuxtLink>
    <p class="font-bold text-xl">Edit profile</p>
    <button @click="changeInfo()" class="text-xl text-gray-500">save</button>
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
      class="mx-4 flex justify-center absolute top-60 bg-white rounded-full w-[75px] h-[75px]"
    >
      <div class="">
        <label
          for="pic"
          class="m-6 w-[70px] h-[70px] relative overflow-hidden rounded-full bottom-6 bg-white text-grey flex justify-center items-center text-[100px] cursor-pointer"
        >
          <img
            class="p-1 w-full rounded-full brightness-[40%]"
            :src="'http://172.20.10.2:4000/'+userInfo.profile_picture"
            alt=""
          />
          <font-awesome-icon
            class="absolute top-[31%] right-[31%] text-white text-3xl"
            :icon="['fas', 'camera']"
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
    </div>
  </div>
  <div class="flex flex-col mt-[7vh] border-t-2 justify-between gap-2">
    <div class="flex items-center">
      <p class="p-3 font-bold w-28">email</p>
      <input v-model="email"  class="text-sky-500 outline-none" type="text">
    </div>
    <hr />
    <div class="flex items-center h-[10vh]">
      <p class="p-3 font-bold w-28">username</p>
      <input v-model="username" class="text-sky-500 outline-none" type="text">
    </div>
    <hr />
    <div class="flex">
      <p class="p-3 font-bold w-28">Location</p>
      <p class="text-sky-500 py-3">کرمان</p>
    </div>
    <hr />
    <div class="flex">
      <p class="p-3 font-bold w-28">Bitrth date</p>
      <p class="text-sky-500 py-3">june 13,2002</p>
    </div>
    <hr />
  </div>
</template>

<style></style>
