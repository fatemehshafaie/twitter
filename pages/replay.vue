<script setup>
definePageMeta({
  layout: false,
});
</script>

    <template #main>
      <div class="flex items-center justify-between  border-b-2">
        <NuxtLink class="text-sky-500 p-3 text-lg" to="/">Cancel</NuxtLink>
        <NuxtLink class="bg-sky-600 p-3 rounded-full m-3 text-white" to="/"
          >Reply</NuxtLink
        >
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
        <p class=" text-gray-500 ">What's happaning?</p>
      </div>
      <div class="w-[80%] h-4/5  flex  justify-center" >
        <editor id="q" class="editor textarea w-full h-full" />
      </div>
    </template>
