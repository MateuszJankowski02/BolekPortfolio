<script setup>
const supabase = useSupabaseClient();

const { data: images, error } = await useAsyncData('images', async () => {
  const { data, error } = await supabase.storage.from('images').list();
  if (error) {
    throw error;
  }
  return data;
});

const logImages = function(){
  console.log("123");
  console.log(images.value);
}


onMounted(() => {

})
</script>

<template>
  <NuxtLayout>
    <div class="test">
      <h1>Supabase</h1>
      <button @click="logImages()">click</button>

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