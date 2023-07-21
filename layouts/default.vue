<script setup>
// let isShow=ref(false);
// console.log(isShow.value);
</script>
<template>
  <div class="container mx-auto">
      <header class="">
        <theHeader class="bg-white" />
      </header>
      <main>
        <slot name="main"></slot>
      </main>
      <footer>
        <theFooter />
      </footer>
    
  </div>
</template>
