<script setup>
definePageMeta({
  layout: false,
});
const Liked = ref(false);
let count = ref(0);
const isLiked = ref(false);
</script>

<template>
  <NuxtLayout name="default">
    <template #main>
      <!-- the main tweet -->
      <div class="flex flex-col py-3 border-b-2 mt-[8vh]">
        <div class="flex">
          <div class="w-14 h-14 m-3">
            <!-- <NuxtLink to="./us" -->
            <img
              class="w-full rounded-full"
              src="../assets/img/prof2.jpg"
              alt=""
            />
          </div>
          <div>
            <div class="flex flex-col py-1">
              <p class="font-bold px-2">saba</p>
              <p>@sabajam.</p>
            </div>
            <p class="text-right mx-4">
              منم دوست دارم مث شما شکست عشقی بخورم ولی همش دارم غذا میخورم
            </p>
          </div>
        </div>
        <div class="text-sky-500 p-3">Translate Tweet</div>
        <div class="flex px-3">
          <p class="text-gray-500">8:35 .</p>
          <p class="text-gray-500">7/15/23</p>
        </div>
        <div class="h-[0.5px] m-3 bg-gray-300"></div>
        <div class="flex">
          <p class="font-bold mx-3">3</p>
          <p class="text-gray-500">Retweets</p>
          <p class="font-bold mx-3">14</p>
          <p class="text-gray-500">Quote Tweets</p>
          <p class="font-bold mx-3">432</p>
          <p class="text-gray-500">Likes</p>
        </div>
        <div class="h-[0.5px] m-3 bg-gray-300"></div>
        <div class="flex justify-center">
          <div class="flex justify-between items-center w-3/4 p-2 mt-1">
            <div class="flex items-center">
              <NuxtLink to="/replay">
                <font-awesome-icon
                  class="text-gray-600 text-2xl"
                  :icon="['far', 'comment']"
                />
              </NuxtLink>
              <!-- <p class="text-xs px-2">{{ count }}</p> -->
            </div>
            <font-awesome-icon
              class="text-gray-600 text-2xl"
              :icon="['fas', 'retweet']"
            />
            <div class="flex items-center">
              <font-awesome-icon
                :icon="['fas', 'heart']"
                class="text-gray-600 text-2xl"
                @click="Liked = !Liked"
                :class="{ 'text-red-600  ': Liked }"
              />
              <!-- <p class="text-xs px-2">{{ count }}</p> -->
            </div>
            <font-awesome-icon
              class="text-gray-600 text-2xl"
              :icon="['fasr', 'arrow-up-from-bracket']"
            />
          </div>
        </div>
      </div>
      <!-- the replay part -->
      <div class="flex">
        <div class="w-10 m-3">
          <img
            class="w-full rounded-full"
            src="../assets/img/profile.JPG"
            alt=""
          />
        </div>
        <div class="flex-col justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex">
              <p class="font-bold">ftmh</p>
              <p class="text-gray-500">@fatmhesh .2h</p>
            </div>
          </div>
          <div class="text-gray-500 mt-2 text-xs">
            Replying to <span class="text-sky-600">@sabajam</span>
          </div>
        </div>
      </div>

      <!-- line -->
      <!-- <div
        class="w-[2px] rounded-xl bg-gray-500 h-16 translate-x-8 -translate-y-6 opacity-50"
      ></div> -->
      <div class="m-3 text-right">
        لالنلناتلمنانامختکختکمتخاتنزنلارتذنمیغفرعغلذهتزغرلذازغرلاذت
      </div>
      <div class="flex justify-center">
        <div class="flex justify-between items-center w-3/4 p-2 mt-1">
          <div class="flex items-center">
            <NuxtLink to="/replay">
              <font-awesome-icon
                class="text-gray-600"
                :icon="['far', 'comment']"
              />
            </NuxtLink>
            <p class="text-xs px-2">{{ count }}</p>
          </div>
          <font-awesome-icon class="text-gray-600" :icon="['fas', 'retweet']" />
          <div class="flex items-center">
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="text-gray-600"
              @click="isLiked = !isLiked"
              :class="{ 'text-red-600': isLiked }"
            />
            <p class="text-xs px-2">{{ count }}</p>
          </div>
          <font-awesome-icon
            class="text-gray-600"
            :icon="['fasr', 'arrow-up-from-bracket']"
          />
        </div>
      </div>
      <hr />
      <div class="flex">
        <div class="w-10 m-3">
          <img
            class="w-full rounded-full"
            src="../assets/img/profile.JPG"
            alt=""
          />
        </div>
        <div class="flex-col justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex">
              <p class="font-bold">ftmh</p>
              <p class="text-gray-500">@fatmhesh .2h</p>
            </div>
          </div>
          <div class="text-gray-500 mt-2 text-xs">
            Replying to <span class="text-sky-600">@sabajam</span>
          </div>
        </div>
      </div>

      <!-- line -->
      <div
        class="w-[2px] rounded-xl bg-gray-500 h-24 absolute left-8 opacity-50"
      ></div>
      <div class="m-3 text-right">
        لالنلناتلمنانامختکختکمتخاتنزنلارتذنمیغفرعغلذهتزغرلذازغرلاذت
      </div>
      <div class="flex justify-center">
        <div class="flex justify-between items-center w-3/4 p-2 mt-1">
          <div class="flex items-center">
            <NuxtLink to="/replay">
              <font-awesome-icon
                class="text-gray-600"
                :icon="['far', 'comment']"
              />
            </NuxtLink>
            <p class="text-xs px-2">{{ count }}</p>
          </div>
          <font-awesome-icon class="text-gray-600" :icon="['fas', 'retweet']" />
          <div class="flex items-center">
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="text-gray-600"
              @click="isLiked = !isLiked"
              :class="{ 'text-red-600': isLiked }"
            />
            <p class="text-xs px-2">{{ count }}</p>
          </div>
          <font-awesome-icon
            class="text-gray-600"
            :icon="['fasr', 'arrow-up-from-bracket']"
          />
        </div>
      </div>
      <div class="flex">
        <div class="w-10 m-3">
          <img
            class="w-full rounded-full"
            src="../assets/img/prof2.jpg"
            alt=""
          />
        </div>
        <div class="flex-col justify-between">
          <div class="flex items-center justify-between w-full">
            <div class="flex">
              <p class="font-bold">saba</p>
              <p class="text-gray-500">@sabajam .2h</p>
            </div>
          </div>
          <div class="text-gray-500 mt-2 text-xs">
            Replying to <span class="text-sky-600">@sabajam</span>
          </div>
        </div>
      </div>
      <div class="m-3 text-right">
       قثلتنننننننننننننننشممممممممممدل///////کمئ.کککملظ.ئل.و
      </div>
      <div class="flex justify-center mb-[8vh]">
        <div class="flex justify-between items-center w-3/4 p-2 mt-1">
          <div class="flex items-center">
            <NuxtLink to="/replay">
              <font-awesome-icon
                class="text-gray-600"
                :icon="['far', 'comment']"
              />
            </NuxtLink>
            <p class="text-xs px-2">{{ count }}</p>
          </div>
          <font-awesome-icon class="text-gray-600" :icon="['fas', 'retweet']" />
          <div class="flex items-center">
            <font-awesome-icon
              :icon="['fas', 'heart']"
              class="text-gray-600"
              @click="isLiked = !isLiked"
              :class="{ 'text-red-600': isLiked }"
            />
            <p class="text-xs px-2">{{ count }}</p>
          </div>
          <font-awesome-icon
            class="text-gray-600"
            :icon="['fasr', 'arrow-up-from-bracket']"
          />
        </div>
      </div>
      <div class=" h-20 flex justify-between items-center bg-white  w-full sticky bottom-16">
        <div class="w-10 m-3">
          <img
            class="w-full rounded-full"
            src="../assets/img/profile.jpg"
            alt=""
          />
        </div>
        <input type="text" name="" id="" placeholder="tweet your reply" class=" bg-gray-300 text-gray-500 rounded-full w-full mr-3 p-3 h-10">
      </div>
    </template>
  </NuxtLayout>
</template>

<style></style>
