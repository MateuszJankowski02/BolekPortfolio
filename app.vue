<script setup>
import {useGetImages} from "~/composables/useGetImages";

const supabase = useSupabaseClient()
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
  console.log(data)
}

async function testFunc(){
  const testData = useGetImages();
  console.log(testData);
}



onMounted(() => {
  //getCountries();
  testFunc();
})



</script>

<template>
  <NuxtLayout>
    <AppHome />
    <AppAbout />
    <AppGallery />
    <AppContact />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
</style>
