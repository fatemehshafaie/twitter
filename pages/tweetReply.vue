
<script>
definePageMeta({
  layout: false,
});
</script>

<template>
  <NuxtLayout name="default">
    <template #main>
        <div class="flex flex-col py-3 border-b-2  mt-[8vh]">
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
        <div class="flex flex-col py-1">
          <p class="font-bold px-2">fatmh</p>
          <p>@fatmhesh.</p>
        </div>
        <p class="text-right mx-4">
          منم دوست دارم مث شما شکست عشقی بخورم ولی همش دارم غذا میخورم
        </p>
      </div>
      
    </div>
    <div class=" text-sky-500 p-3">Translate Tweet</div>
    <div class="flex px-3">
        <p class="text-gray-500">8:35 .</p>
        <p class="text-gray-500"> 7/15/23</p>
    </div>
    <div class="h-[0.5px] m-3 bg-gray-300"></div>
    <div class="flex">
        <p class=" font-bold mx-3">3</p>
        <p class="text-gray-500">Retweets</p>
        <p class=" font-bold mx-3">14</p>
        <p class="text-gray-500">Quote Tweets</p>
        <p class=" font-bold mx-3">432</p>
        <p class="text-gray-500">Likes</p>
    </div>
    <div class="h-[0.5px] m-3 bg-gray-300"></div>
    <div class="flex justify-center">
      <div class="flex justify-between items-center w-3/4 p-2 mt-1">
        <div class="flex items-center">
          <NuxtLink to="/replayTweet">
            <font-awesome-icon class="text-gray-600 text-2xl  " :icon="['far', 'comment']" />
          </NuxtLink>
          <!-- <p class="text-xs px-2">{{ count }}</p> -->
        </div>
        <font-awesome-icon class="text-gray-600 text-2xl  " :icon="['fas', 'retweet']" />
        <div class="flex items-center">
          <font-awesome-icon
            :icon="['fas', 'heart']"
            class="text-gray-600 text-2xl"
            @click="isLiked = !isLiked"
            :class="{ 'text-red-600  ': isLiked }"
          />
          <!-- <p class="text-xs px-2">{{ count }}</p> -->
        </div>
        <font-awesome-icon
          class="text-gray-600  text-2xl"
          :icon="['fasr', 'arrow-up-from-bracket']"
        />
      </div>
    </div>
  </div> 
  <div class="flex items-center justify-between">
      </div>
      <div class="text-gray-500 ml-16 mt-2 text-xs">
        Replying to <span class="text-sky-600">@sabajam</span>

      </div>

      <div class="flex">
        <div class="w-[2px] rounded-xl bg-gray-500 h-9 translate-x-8 -translate-y-6 opacity-50"></div>
        <div class="w-10 h-9 m-3 mt-4">
          <!-- <NuxtLink to="./us" -->
          <img
            class="w-full rounded-full"
            src="../assets/img/profile.JPG"
            alt=""
          />
        </div>
        <textarea
          class="outline-none p-2 w-full h-96"
          placeholder="Tweet your reply"
          type="text"
        ></textarea>
      </div>
    </template>

  </NuxtLayout>
</template>


<style>

</style>