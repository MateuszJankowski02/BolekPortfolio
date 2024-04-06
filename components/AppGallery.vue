<script setup>
import Cardset from "~/components/AppCardset.vue";

const images = reactive([
  {
    "id": 1,
    "content": "Image1",
    "scale": 0,
    "opacity": 0
  },
  {
    "id": 2,
    "content": "Image2",
    "scale": 0,
    "opacity": 0
  },
  {
    "id": 3,
    "content": "Image3",
    "scale": 0,
    "opacity": 0
  },
  {
    "id": 4,
    "content": "Image4",
    "scale": 0,
    "opacity": 0
  },
  {
    "id": 5,
    "content": "Image5",
    "scale": 0,
    "opacity": 0
  },
  {
    "id": 6,
    "content": "Image6",
    "scale": 0,
    "opacity": 0
  },
  {
    "id": 7,
    "content": "Image7",
    "scale": 0,
    "opacity": 0
  },
]);

const isAnimating = ref(false);

const swapLeft = function() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  console.log(images);
  images.forEach((image, index) => {
    if (index === 2 || index === 6) {
      image.scale = 0.8;
      image.opacity = 0.5;
    }else if(index === 3 || index === 5) {
      image.scale = 0.9;
      image.opacity = 0.75;
    }else if(index === 4){
      image.scale = 1;
      image.opacity = 1;
    }else {
      image.scale = 0;
      image.opacity = 0;
    }
  });
  images.push(...images.splice(0, 1));
  setTimeout(() => {
    isAnimating.value = false;
  }, 500);
};

const swapRight = function() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  console.log(images);
  images.forEach((image, index) => {
    if (index === 0 || index === 4) {
      image.scale = 0.8;
      image.opacity = 0.5;
    }else if(index === 1 || index === 3) {
      image.scale = 0.9;
      image.opacity = 0.75;
    }else if(index === 2){
      image.scale = 1;
      image.opacity = 1;
    }else {
      image.scale = 0;
      image.opacity = 0;
    }
  });
  images.unshift(...images.splice(-1));
  setTimeout(() => {
    isAnimating.value = false;
  }, 500);
};

const initializeElements = function() {
  images.forEach((image, index) => {
    if (index === 1 || index === 5) {
      image.scale = 0.8;
      image.opacity = 0.5;
    }else if(index === 2 || index === 4) {
      image.scale = 0.9;
      image.opacity = 0.75;
    }else if(index === 3){
      image.scale = 1;
      image.opacity = 1;
    }else {
      image.scale = 0;
      image.opacity = 0;
    }
  });
};

onMounted(() => {
  initializeElements()
});
</script>
<template>
    <div class="section">
        <div class="section-content-column">
            <h5 class="section-heading">Gallery</h5>
            <AppCardset />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.temp{
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 15%;
  &:nth-child(1){
    transform: translateY(-100px);
  }
}
</style>