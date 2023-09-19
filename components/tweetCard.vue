<script setup>
import axios from "axios";
let count = ref();
let isLiked = ref();
let red = ref(false);
const props = defineProps({
  id: Number,
  body: String,
  liked: Boolean,
  likes: Number,
  NumberOfReplies: Number,
  prof:String
});
count.value = props.likes;
isLiked.value = props.liked;
console.log(props.prof);
function liked() {
  console.log(props.liked);
  if (!isLiked.value) {
    axios
      .get("http://172.20.10.2:4000/users/like/" + props.id, {
        headers: {
          "Cache-Control": "no-cache",
          cookies: useCookie("user").value,
        },
      })
      .then(function (response) {
        if (response.data.status == true) {
          count.value++;
        }
        console.log(response);
        console.log(isLiked.value);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
  if (isLiked.value) {
    axios
      .get("http://172.20.10.2:4000/users/unlike/" + props.id, {
        headers: {
          "Cache-Control": "no-cache",
          cookies: useCookie("user").value,
        },
      })
      .then(function (response) {
        count.value--;
        isLiked.value = false;
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }
}
</script>
<template>
  <NuxtLink to="/tweetReply">
    <div class="flex flex-col py-3">
      <div class="flex">
        <div class="w-14 h-14 m-3">
          <!-- <NuxtLink to="./us" -->
          <img
            class="w-full rounded-full"
            :src="'http://172.20.10.2:4000/'+props.prof"
            alt=""
          />
        </div>
        <div class="w-full m-3">
          <div class="flex py-1">
            <p class="font-bold px-2">fatmh</p>
            <p>@fatmhesh.</p>
          </div>
          <div class="m-3">
            <p v-html="props.body" class="text-right mx-4"></p>
          </div>
        </div>
      </div>
      <!-- icons -->
    </div>
  </NuxtLink>
  <div class="flex justify-center border-b-2">
    <div class="flex justify-between items-center w-3/4 p-2 mt-1">
      <div class="flex items-center">
        <NuxtLink to="/replay">
          <font-awesome-icon class="text-gray-600" :icon="['far', 'comment']" />
        </NuxtLink>
        <p class="text-xs px-2">{{ props.NumberOfReplies }}</p>
      </div>
      <NuxtLink to="/quets">
        <font-awesome-icon class="text-gray-600" :icon="['fas', 'retweet']" />
      </NuxtLink>
      <div class="flex items-center">
        <font-awesome-icon
          :icon="['fas', 'heart']"
          class="text-gray-600"
          @click="
            liked();
            isLiked = !isLiked;
          "
          :class="{ 'text-red-600': isLiked }"
        />

        <p class="text-xs px-2" v-show="count != 0">
          {{ count }}
        </p>
      </div>

      <font-awesome-icon
        class="text-gray-600"
        :icon="['fasr', 'arrow-up-from-bracket']"
      />
    </div>
  </div>
</template>
<style scoped>
.heart {
  cursor: pointer;
  height: 50px;
  width: 50px;
  background-image: url("https://abs.twimg.com/a/1446542199/img/t1/web_heart_animation.png");
  background-position: left;
  background-repeat: no-repeat;
  background-size: 2900%;
}

.heart:hover {
  background-position: right;
}

.is_animating {
  animation: heart-burst 0.8s steps(28) 1;
}

@keyframes heart-burst {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}
</style>
