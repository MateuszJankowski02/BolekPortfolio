<script setup>
const supabase = useSupabaseClient()
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})



</script>

<template>
  <NuxtLayout>
    <Home />
    <About />
    <Gallery />
    <Contact />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
</style>
