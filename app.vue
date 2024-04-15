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
  console.log(images.value);
}

const signedURLs = reactive([]);

const signedURLsCount = ref(0);
const getSignedURL = async (image) => {
  const { data, error } = await supabase.storage.from('images').createSignedUrl(image, 60);
  if (error) {
    throw error;
  }
  signedURLs[signedURLsCount.value] = data.signedUrl;
  signedURLsCount.value++;
};

const getSignedURLs = async () => {
  const promises = images.value.map(image => getSignedURL(image.name));
  await Promise.all(promises);
};

const logSignedURLs = async function(){
  await getSignedURLs();
  console.log(signedURLs);
}

onMounted(() => {
})
</script>

<template>
  <NuxtLayout>
    <div class="test">
      <h1>Supabase</h1>
      <button @click="logSignedURLs">click</button>

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