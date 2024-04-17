<script setup>

const sectionTransition = ref(false);

const home = ref(null);
const about = ref(null);
const gallery = ref(null);
const contact = ref(null);

const scrollTo = (element) => {
  sectionTransition.value = true;
  setTimeout(() => {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'instant'
    });
    sectionTransition.value = false;
  }, 1000);
}
onMounted(() => {
  home.value = document.getElementById('home');
  about.value = document.getElementById('about');
  gallery.value = document.getElementById('gallery');
  contact.value = document.getElementById('contact');
});

</script>
<template>
    <Transition name="sectionTransition">
      <div v-if="sectionTransition" class="section-transition"></div>
    </Transition>
    <div class="header" v-if="!sectionTransition">
        <div class="headerButtons">
            <AppButton buttonTitle="Home" @click="scrollTo(home)"/>
            <AppButton buttonTitle="About" @click="scrollTo(about)"/>
            <AppButton buttonTitle="Gallery" @click="scrollTo(gallery)"/>
            <AppButton buttonTitle="Contact" @click="scrollTo(contact)"/>
        </div>
    </div>
</template>
<style lang="scss" scoped>

</style>