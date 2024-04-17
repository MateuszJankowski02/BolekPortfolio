<script setup lang="ts">

const props = defineProps(['cards']);

const imagesLoaded = ref(false);

const phoneWidth = ref(0);

const imageSrcs = reactive(
      ['/img_1.jpg',
      '/img_2.jpg',
      '/img_3.jpg',
      '/img_4.jpg',
      '/img_5.jpg',
      '/img_6.jpg'
      ]);


const isAnimating = ref(false);

const nextCard = function() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  props.cards.unshift(...props.cards.splice(-1));
  setTimeout(() => {
    isAnimating.value = false;
  }, 1000);
};

const phoneNextCard = function() {
  console.log(phoneWidth.value)
  if (phoneWidth.value < 500) {
    nextCard();
  }
};

onMounted(() => {
  let loadedImagesCount = 0;
  props.cards.forEach((card: any) => {
    const img = new Image();
    img.src = card.path;
    img.onload = () => {
      loadedImagesCount++;
      if (loadedImagesCount === props.cards.length) {
        imagesLoaded.value = true;
      }
    };
  });
  phoneWidth.value = window.innerWidth;
  window.addEventListener('resize', () => {
    phoneWidth.value = window.innerWidth;
  });
});

</script>

<template>
  <div class="cardset-wrapper">
    <transition-group name="list" tag="div" class="cardset">
      <NuxtImg
          :src="item.path"
          v-for="(item, index) in props.cards.slice(0, 6)"
          :key="item.id"
          class="card"
          @click="phoneNextCard"
      />
    </transition-group>
    <Icon name="mdi:arrow-right-bold-circle-outline" @click="nextCard" class="cardset-icon"/>
  </div>
</template>

<style scoped lang="scss">

</style>