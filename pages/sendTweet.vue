<script setup>
definePageMeta({
  layout: false,
});
let data=0;

function sendTweet() {}

//   // function ret(){

//       let preview= null
//     //  let image= null,
//     //  let preview_list= [],
//     // let  image_list =[]
//   //   }
// const previewImage = function (event) {
//   let input = event.target;
//   if (input.files) {
//     let reader = new FileReader();
//     reader.onload = (e) => {
//       this.preview = e.target.result;
//     };
//     this.image = input.files[0];
//     reader.readAsDataURL(input.files[0]);
//   }
// };

//image upload and preview methods
//   selectImage () {
//     this.$refs.fileInput.click()
// };
// pickFile () {
//   let input = this.$refs.fileInput
//   let file = input.files
//   if (file && file[0]) {
//     let reader = new FileReader
//     reader.onload = e => {
//       this.previewImage = e.target.result
//     }
//     reader.readAsDataURL(file[0])
//     this.$emit('input', file[0])
//   }
// }
</script>

<template #main>
  <div class="mt-4">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" class="text-sky-500 mx-3">Cancel</NuxtLink>
      <div class="flex items-center">
        <p class="text-sky-500 mx-3 font-semibold">Draft</p>
        <button
          @click="sendTweet()"
          class="mx-3 bg-sky-500 text-white px-4 py-2 rounded-full"
        >
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
      <p class=" text-gray-500">What's happaning?</p>
      <!-- <Editor
        type="text"
        placeholder="What's happaning?"
        class="outline-none font-semibold text-xl w-full"
      /> -->
      <!-- <editor/> -->
      <!-- <textarea
        type="text"
        placeholder="What's happaning?"
        class="outline-none font-semibold text-xl w-full"
      ></textarea> -->
      <!-- <client-only>
        <tiptap-editor value="somthing"/>
      </client-only> -->
    </div>
    <div class="w-[80%] h-4/5  flex  justify-center" >
        <editor id="q" class="editor textarea w-full h-full" />
      </div>
  </div>
  <!-- <template v-if="preview">
    <img :src="preview" class="img-fluid" />
    <p class="mb-0">file name: {{ image.name }}</p>
    <p class="mb-0">size: {{ image.size / 1024 }}KB</p>
  </template> -->
  <div class="absolute bottom-20 mx-3 flex items-center">
    <font-awesome-icon
      class="text-sky-500 mr-3"
      :icon="['fas', 'earth-americas']"
    />
    <p class="text-sky-500">Everyone can reply</p>
  </div>
  <!-- footer -->
  <div class="absolute bottom-0 border-t-2 w-full mt-4">
    <button class="up icon sub1">
      <label for="upload">
        <input
          @change="previewImage"
          accept="image/*"
          id="upload"
          class="hidden"
          type="file"
        />
        <font-awesome-icon
          class="text-sky-500 text-2xl px-4 py-5"
          :icon="['far', 'image']"
        />
      </label>
    </button>
    <button>
      <label for="upload">
        <input
          id="upload"
          class="hidden"
          type="file"
          accept="image/*"
          capture="camera"
        />
        <font-awesome-icon
          class="text-sky-500 text-2xl px-4 py-5"
          :icon="['fas', 'camera']"
        />
      </label>
    </button>
  </div>
</template>

<style></style>
