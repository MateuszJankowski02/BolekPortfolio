<script setup>
const images = reactive([
  {
    id: "1",
    content: "Image1",
    scale: 0.8,
    opacity: 0.5
  },
  {
    id: "2",
    content: "Image2",
    scale: 0.9,
    opacity: 0.75
  },
  {
    id: "3",
    content: "Image3",
    scale: 1.0,
    opacity: 1
  },
  {
    id: "4",
    content: "Image4",
    scale: 0.9,
    opacity: 0.75
  },
  {
    id: "5",
    content: "Image5",
    scale: 0.8,
    opacity: 0.5
  }
]);

const isAnimating = ref(false);

const swapElements = function() {
  if (isAnimating.value) return;
  isAnimating.value = true;
  console.log(images);
  images.forEach((image, index) => {
    if (index === 3 || index === 4) {
      image.scale = 0.8;
      image.opacity = 0.5;
    } else if (index === 0 || index === 2) {
      image.scale = 0.9;
      image.opacity = 0.75;
    } else if (index === 1) {
      image.scale = 1.0;
      image.opacity = 1;
    }
  });
  images.unshift(...images.splice(-1));
  setTimeout(() => {
    isAnimating.value = false;
  }, 500);
};
</script>
<template>
    <div class="section">
        <div class="section-content-column">
            <h5 class="section-heading">Gallery</h5>
            <transition-group name="list" tag="div" class="images">

              <div
                  v-for="image in images"
                  :key="image.id"
                  class="image-placeholder-wrapper"
              >
                <div class="image-placeholder" :style="[{opacity: image.opacity, transform: `scale(${image.scale})`}]">
                  <p>Image id: {{ image.id }}</p>
                  <p>Opacity : {{ image.opacity }}</p>
                  <p>Scale   : {{ image.scale }}</p>
                </div>
              </div>
            </transition-group>
          <Button buttonTitle="Home" @click="swapElements"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../assets/styles/abstracts' as *;
    .section-content-column{
        @include flex-center(column);
        gap: 2rem;
    }

    .images{
      width: 100%;
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      justify-items: center;
    }

    .image-placeholder{
        width: 80%;
        height: 300px;
        background-color: green;
        transition: transform 500ms, opacity 500ms;
    }
    .image-placeholder-wrapper{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .list-move {
      transition: transform 500ms, opacity 500ms;
    }

</style>