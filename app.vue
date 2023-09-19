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
  <ul class="test">
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>
<style lang="scss" scoped>
</style>
