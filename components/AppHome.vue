<script setup>
import { useScrollTo } from '../composables/useScrollTo';

const { myScrollTo, sectionTransition } = useScrollTo();

const about = ref(null);

onMounted(() => {
  about.value = document.getElementById('about');
});

</script>
<template>
  <div class="section-wrapper home-wrapper" id="home">
    <div class="home-background-image"></div>
    <div class="section home">
        <div class="section-content-column">
            <h5 class="heading-1">Jakub Bolek</h5>
            <h4 class="heading-2">Automotive photographer</h4>
            <h2>I strive to create stunning visuals that showcase the essence and allure of cars.</h2>
            <p class="home-seeMore" @click="myScrollTo(about, 'smooth')">See more...</p>
        </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
    @use '../assets/styles/abstracts' as *;
    .heading-1{
        font-size: 1.6rem;
    }
    .heading-2{
        font-size: 3.2rem;
    }
</style>