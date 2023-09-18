<script setup>
import axios from 'axios';
definePageMeta({
  layout: false,
});

const isActive = ref(true);
axios.get('http://localhost:4000/like',{
  headers:{}
})
  .then(function (response) {
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

</script>
<template>
  <NuxtLayout name="default">
    <template #main>
      <div class="mt-[8vh]"></div>
      <!-- <TweetCard />
      <QuetTweet />
      <TweetCard />
      <QuetTweet />
      <TweetCard /> -->
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
