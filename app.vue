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
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
</style>
