<script setup>
definePageMeta({
  layout: false,
});
let count = ref(500);
</script>

    <template #main>
      <div class="w-full h-[200px]">
        <img class="h-full w-full" src="../assets/img/header.jpg" alt="" />
      </div>
      <div
        class="mx-4 flex justify-center absolute top-44 bg-white rounded-full w-[80px] h-[80px]"
      >
        <div class="m-1 w-[75px] h-[75px]">
          <!-- <NuxtLink to="./us" -->
          <img
            class="w-full rounded-full"
            src="../assets/img/profile.JPG"
            alt=""
          />
        </div>
      </div>
      <div class="flex justify-end">
        <a
          class="border-sky-500 border rounded-full py-1 px-4 m-2 font-semibold text-sky-500"
          href=""
          >Edit profile</a
        >
      </div>
      <div class="flex flex-col mx-4 justify-between gap-2">
        <p class="font-bold">ftmh</p>
        <p class="text-gray-400">@fatmhesh</p>
        <p class="">this is bio</p>
        <div class="flex">
          <div class="flex items-center">
            <p class=" text-sm font-semibold pr-2">{{ count }}</p>
            <p class=" text-gray-500 ">Following</p>
          </div>
          <div class="flex items-center">
            <p class=" text-sm font-semibold px-2">{{ count }}</p>
            <p class=" text-gray-500 ">followers</p>
          </div>
        </div>
      </div>
      <div class="flex justify-between border-b-2">
        <a
          class="text-sky-500 font-semibold p-4 text-xl border-b-2 border-sky-500"
          href=""
          >Tweets</a
        >
        <a class="text-gray-500 font-semibold p-4 text-xl" href=""
          >Tweets & replies</a
        >
        <a class="text-gray-500 font-semibold p-4 text-xl" href="">Media</a>
        <a class="text-gray-500 font-semibold p-4 text-xl" href="">Likes</a>
      </div>
      <div class="mb-[8vh]">
        <TweetCard />
        <QuetTweet />
        <TweetCard class="" />
      </div>
      <TheFooter/>
    </template>

<style></style>
