<template>
  <div>
    <div
      class=" m-5 w-80 h-80 bg-contain bg-no-repeat"
      :style="{ 'background-image': `url(${previewImage})` }"
      @click="selectImage"
    ></div>
    <label for="upload">
      <input
        accept="image/*"
        id="upload"
        class="hidden"
        type="file"
        ref="fileInput"
        @input="pickFile"
      />
      <font-awesome-icon
        class="text-sky-500 text-2xl px-4 py-5"
        :icon="['far', 'image']"
      />
    </label>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      previewImage: null,
    };
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.click();
    },
    pickFile() {
      let input = this.$refs.fileInput;
      let file = input.files;
      if (file && file[0]) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.previewImage = e.target.result;
        };
        reader.readAsDataURL(file[0]);
        this.$emit("input", file[0]);
      }
    },
  },
};
</script>

<style></style>
