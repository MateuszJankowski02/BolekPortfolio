<script setup>
import { useScrollTo } from '../composables/useScrollTo';

const home = ref(null);
const about = ref(null);
const gallery = ref(null);
const contact = ref(null);

const pastHome = ref(false);

const { myScrollTo, sectionTransition } = useScrollTo();

onMounted(() => {
  home.value = document.getElementById('home');
  about.value = document.getElementById('about');
  gallery.value = document.getElementById('gallery');
  contact.value = document.getElementById('contact');

  window.addEventListener('scroll', () => {
    pastHome.value = window.scrollY > home.value.offsetHeight - 100;
  });
});

</script>
<template>
    <Transition name="sectionTransition">
      <div v-if="sectionTransition" class="section-transition"></div>
    </Transition>
    <Transition name="headerBackToTopTransition">
      <nav v-if="pastHome" class="headerBackToTop" @click="myScrollTo(home, 'smooth')">
        <Icon name="material-symbols:arrow-upward" />
      </nav>
    </Transition>
    <Transition name="headerTransition">
      <nav class="header" v-if="!sectionTransition">
          <div class="headerButtons">
              <AppButton buttonTitle="About" @click="myScrollTo(about, 'instant')" class="headerButton"/>
              <AppButton buttonTitle="Gallery" @click="myScrollTo(gallery, 'instant')" class="headerButton"/>
              <AppButton buttonTitle="Contact" @click="myScrollTo(contact, 'instant')" class="headerButton"/>
          </div>
      </nav>
    </Transition>
</template>
<style lang="scss" scoped>

</style>