<script setup>
definePageMeta({
  layout: false,
});
</script>
<template>
  <NuxtLayout name="default">
    <template #main>
      <tweetCard class="mt-[8vh]" />
      <QuetTweet />
      <tweetCard />
      <tweetCard />
      <QuetTweet />
      <tweetCard class="mb-[8vh]" />
      <button
        class="fixed text-white bg-sky-500 w-14 h-14 rounded-full right-2 bottom-16"
      >
        <NuxtLink to="/sendTweet">
          <font-awesome-icon :icon="['fas', 'plus']" />
        </NuxtLink>
      </button>
    </template>
  </NuxtLayout>
</template>

<style></style>
