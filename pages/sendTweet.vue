<script setup>
definePageMeta({
  layout: false,
});

function sendTweet(){

}
</script>

    <template #main>
      <div class="mt-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="/" class="text-sky-500 mx-3">Cancel</NuxtLink>
          <div class="flex items-center">
            <p class="text-sky-500 mx-3 font-semibold">Draft</p>
            <button @click="sendTweet()" class="mx-3 bg-sky-500 text-white px-4 py-2 rounded-full">
              Tweet
            </button>
          </div>
        </div>
        <div class="flex items-center">
          <div class="w-10 h-9 m-3">
            <!-- <NuxtLink to="./us" -->
            <img
              class="w-full rounded-full"
              src="../assets/img/profile.JPG"
              alt=""
            />
          </div>
          <input
            type="text"
            placeholder="What's happaning?"
            class="outline-none font-semibold text-xl"
          />
        </div>
      </div>
      <div class=" mt-4">
        <button class="up icon sub1">
          <label for="upload">
            <input id="upload" class="hidden" type="file" />
            <font-awesome-icon
              class="text-sky-500 text-2xl px-4 py-5"
              :icon="['far', 'image']"
            />
          </label>
        </button>
        <button >
          <label for="upload">
            <input id="upload" class="hidden" type="file" accept="image/*" capture="camera" />

            <font-awesome-icon
              class="text-sky-500 text-2xl px-4 py-5"
              :icon="['fas', 'camera']"
            />
          </label>
        </button>
      </div>
    </template>

<style></style>
