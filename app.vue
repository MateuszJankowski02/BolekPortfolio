<script setup>

onMounted(() => {
});

</script>

<template>
  <NuxtLayout>
    <div class="test">
      <h1>Supabase</h1>
      <button @click="consoleLogURLs">click</button>

    </div>
    <AppHome />
    <AppAbout />
    <AppGallery />
    <AppContact />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
  .test {
    padding-top: 200px;
    width: 500px;
    height: 300px;
    background-color: red;
  }
  .testimg{
    width:200px;
    height:200px;
  }
</style>