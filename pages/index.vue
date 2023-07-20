<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="default">
    <template #main>
      <div class="mt-[8vh]"></div>
      <TweetCard />
      <QuetTweet />
      <TweetCard />
      <QuetTweet />
      <TweetCard  />
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
