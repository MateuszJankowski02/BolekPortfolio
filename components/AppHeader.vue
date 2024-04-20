<script setup>

const sectionTransition = ref(false);

const home = ref(null);
const about = ref(null);
const gallery = ref(null);
const contact = ref(null);

const pastHome = ref(false);

const scrollTo = (element, behavior) => {

  behavior === 'instant' ? sectionTransition.value = true : sectionTransition.value = false;

  if (behavior === 'instant'){
    setTimeout(() => {
      window.scrollTo({
        top: element.offsetTop,
        behavior: behavior
      });
      sectionTransition.value = false;
    }, 500);
    return;
  }

  window.scrollTo({
    top: element.offsetTop,
    behavior: behavior
  });

}
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
      <nav v-if="pastHome" class="headerBackToTop">
        <Icon icon="arrow-up" @click="scrollTo(home, 'smooth')"/>
      </nav>
    </Transition>
    <Transition name="headerTransition">
      <nav class="header" v-if="!sectionTransition">
          <div class="headerButtons">
              <AppButton buttonTitle="About" @click="scrollTo(about, 'instant')" class="headerButton"/>
              <AppButton buttonTitle="Gallery" @click="scrollTo(gallery, 'instant')" class="headerButton"/>
              <AppButton buttonTitle="Contact" @click="scrollTo(contact, 'instant')" class="headerButton"/>
          </div>
      </nav>
    </Transition>
</template>
<style lang="scss" scoped>

</style>