<script setup>
const isLiked=ref(false)
const count=ref(0);
</script>

<template>
  <NuxtLink to="/tweetReply">
    <div class="flex flex-col py-3">
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
        <div class="flex flex-col">
          <p class="text-right m-4">
            منم دوست دارم مث شما شکست عشقی بخورم ولی همش دارم غذا میخورم
          </p>
          <div class="border rounded-xl mx-2 p-2 flex">
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
              <p class=" my-1 mx-2">
                هعهستبمنیتمنتیسنمیامتاتایتان میتمسدمرد توییترتون درست شد؟
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


  </div>
  </NuxtLink>
  <div class="flex justify-center border-b-2">
      <div class="flex justify-between items-center w-3/4 p-2 mt-1">
        <div class="flex items-center">
          <NuxtLink to="/replay">
            <font-awesome-icon class="text-gray-600" :icon="['far', 'comment']" />
          </NuxtLink>  
          <p class="text-xs px-2">{{ count }}</p>
        </div>
        <NuxtLink to="/quets">
          <font-awesome-icon class="text-gray-600" :icon="['fas', 'retweet']" />
        </NuxtLink>

        <div class="flex items-center">
          <font-awesome-icon
            :icon="['fas', 'heart']"
            class="text-gray-600"
            @click="isLiked = !isLiked"
            :class="{ 'text-red-600': isLiked }"
          />
          <p class="text-xs px-2">{{ count }}</p>
        </div>
        <font-awesome-icon
          class="text-gray-600"
          :icon="['fasr', 'arrow-up-from-bracket']"
        />
      </div>
    </div>

</template>

<style></style>
