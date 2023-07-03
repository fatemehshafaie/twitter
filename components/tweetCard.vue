<script></script>
<template>
  <div class="flex flex-col py-3 border-b-2">
    <div class="flex">
      <div class="w-14 h-14 m-3">
        <!-- <NuxtLink to="./us" -->
        <img
          class="w-full rounded-full"
          src="../assets/img/profile.JPG"
          alt=""
        />
      </div>
      <div>
        <div class="flex py-1">
          <p class="font-bold px-2">fatmh</p>
          <p>@fatmhesh.</p>
        </div>
        <p class="text-right mx-4">
          منم دوست دارم مث شما شکست عشقی بخورم ولی همش دارم غذا میخورم
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <div class="flex justify-between w-3/4 p-2 mt-1">
        <font-awesome-icon class=" text-gray-600" :icon="['far', 'comment']" />
        <font-awesome-icon class=" text-gray-600" :icon="['fas', 'retweet']" />
        <font-awesome-icon class=" text-gray-600" :icon="['far', 'heart']" />
        <font-awesome-icon class=" text-gray-600" :icon="['fasr', 'arrow-up-from-bracket']" />
      </div>
    </div>
  </div>
</template>
<style></style>
