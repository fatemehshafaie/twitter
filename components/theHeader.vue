<script setup>
const isActive = ref(true);
function sendEm() {
  isActive = !isActive;
}
</script>

<template>
  <div class="container fixed top-0 bg-white">
    <div class="flex justify-between items-center border-b-2">
      <button
        @click="
          isActive = !isActive;
        "
        class="w-10 h-10 m-3"
      >
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
    <!-- sidebar -->
    <!-- <div
    class="w-[85%] h-[100vh] absolute top-0 bg-white shadow-2xl "
    :class="{ 'hidden' :isActive }"
  >
    <div class="flex justify-between">
      <div class="w-16 h-16 m-6">
 
        <img
          class="w-full rounded-full"
          src="../assets/img/profile.JPG"
          alt=""
        />
      </div>
      <div
        class="rounded-full flex justify-center items-center w-9 h-9 m-6 border-[2px] border-sky-500"
      >
        <font-awesome-icon
          class="text-sky-500 text-2xl w-full h-full"
          :icon="['fas', 'ellipsis']"
        />
      </div>
    </div>

    <div class="flex-col mx-6">
      <p class="font-bold">Ftmh</p>
      <p class="text-gray-500">@fatmhesh</p>
    </div>
    <div class="flex gap-2 m-6">
      <p class="font-bold">903</p>
      <p class="text-gray-500">Following</p>
      <p class="font-bold">1,355</p>
      <p class="text-gray-500">Followers</p>
    </div>
    <div class="flex-col w-[30%] m-6">
      <NuxtLink to="/user" class="flex justify-between items-center  my-8">
        <font-awesome-icon class="  text-gray-500 text-xl" :icon="['far', 'user']" />
        <p class="  font-semibold text-start w-[80px] text-xl ">profile</p>
      </NuxtLink>
      <div class="flex justify-between items-center my-10">
        <font-awesome-icon class=" text-gray-500 text-xl" :icon="['fas', 'rectangle-list']" />
        <p class="font-semibold text-start w-[80px] text-xl">List</p>
      </div>
      <div class="flex justify-between items-center my-10">
        <font-awesome-icon class=" text-gray-500 text-xl" :icon="['far', 'comment-dots']" />
        <p class="font-semibold text-start w-[80px] text-xl">Topics</p>
      </div>
      <div class="flex justify-between items-center my-10">
        <font-awesome-icon class=" text-gray-500 text-xl" :icon="['far', 'bookmark']" />
        <p class="font-semibold text-start w-[80px] text-xl">Bookmarks</p>
      </div>
      <div class="flex justify-between items-center my-10">
        <font-awesome-icon class=" text-gray-500 text-xl" :icon="['fas', 'bolt']" />
        <p class="font-semibold text-start w-[80px] text-xl">Moments</p>
      </div>
    </div>
    <hr>
    <div class="flex-col m-6 justify-between">
      <p class="my-9 text-2xl">Setting and privacy</p>
      <p class="text-2xl">Help Center</p>
    </div>
    <div class="flex justify-between absolute bottom-0 w-full">
      <font-awesome-icon class=" text-sky-500 mx-6 my-3 text-3xl" :icon="['far', 'lightbulb']" />
      <font-awesome-icon class=" text-sky-500 mx-6 my-3 text-3xl" :icon="['fas', 'qrcode']" />

    </div>
  </div> -->
</template>

<style></style>
