<script setup>
import axios from 'axios';
definePageMeta({
  layout: false,
});
let hiden =ref(false);
// axios
//   .post("http://172.20.10.2:4000/users//replie/", {

//     headers: {
//       "Cache-Control": "no-cache",
//       cookies: useCookie("user").value,
//     },
//   })
//   .then(function (response) {

//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
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
        <div class="flex flex-col">
          <p :class="{'hidden' : hiden}" class=" text-gray-400 m-3 mx-6 absolute top-24" >What's happening?</p>
        <div @click="hiden =!hiden" class=" w-96 h-full mx-6 m-3 flex justify-center" >
        <editor id="q" class="editor textarea w-full h-full" />
        </div>
        </div>

      </div>

    </template>
