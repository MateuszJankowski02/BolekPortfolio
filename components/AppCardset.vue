<script setup lang="ts">
const imageSrcs = reactive(
["/img_1.jpg",
      "/img_2.jpg",
      "/img_3.jpg",
      "/img_4.jpg",
      "/img_5.jpg",
      "/img_6.jpg"
      ]);

const cards = reactive([{
  "id": 1,
  "src": imageSrcs[0],
  "rotate": "0deg",
  "translateX": "0deg",
},
{
  "id": 2,
  "src": imageSrcs[1],
  "rotate": "0deg",
  "translateX": "0deg",
},
{
  "id": 3,
  "src": imageSrcs[2],
  "rotate": "0deg",
  "translateX": "0deg",
},
{
  "id": 4,
  "src": imageSrcs[3],
  "rotate": "0deg",
  "translateX": "0deg",
},
{
  "id": 5,
  "src": imageSrcs[4],
  "rotate": "0deg",
  "translateX": "0deg",
},
{
  "id": 6,
  "src": imageSrcs[5],
  "rotate": "0deg",
  "translateX": "0deg",
}
]);

const isAnimating = ref(false);

const nextCard = function() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  cards.unshift(...cards.splice(-1));
  console.log(cards);
  setTimeout(() => {
    isAnimating.value = false;
  }, 1000);
};
</script>

<template>
  <div class="cardset-wrapper">
    <transition-group name="list" tag="div" class="cardset">
      <NuxtImg
          :src="item.src"
          v-for="(item, index) in cards.slice(0, 5)"
          :key="item.id"
          class="card"
      />
    </transition-group>
    <Icon name="mdi:arrow-right-bold-circle-outline" size="50" @click="nextCard" class="cardset-icon"/>
  </div>
</template>

<style scoped lang="scss">

</style>