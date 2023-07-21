<script></script>

<template>
  <div class="container mx-auto fixed bottom-0 bg-white border-t-2">
    <div class="flex justify-between items-center border-b-2">
      <NuxtLink to="/">
        <font-awesome-icon
          class="text-sky-500 text-2xl m-4"
          :icon="['fas', 'house']"
        />
      </NuxtLink>
      <font-awesome-icon
        class="text-gray-700 text-2xl m-4"
        :icon="['fasl', 'magnifying-glass']"
      />
      <font-awesome-icon
        class="text-gray-700 text-2xl m-4"
        :icon="['far', 'bell']"
      />
      <font-awesome-icon
        class="text-gray-700 text-2xl m-4"
        :icon="['far', 'envelope']"
      />
    </div>
  </div>
</template>

<style></style>
