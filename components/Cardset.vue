<script setup lang="ts">
const imageSrcs = reactive(
["/img_1.jpg",
      "/img_2.jpg",
      "/img_3.jpg",
      "/img_4.jpg",
      "/img_5.jpg"]);
</script>

<template>
  <div class="cardset-wrapper">
    <transition-group name="list" tag="div" class="cardset">
      <NuxtImg :src="`/img_${n}.jpg`" v-for="n in 5" :key="n" class="card" />
    </transition-group>
  </div>
</template>

<style scoped lang="scss">

</style>