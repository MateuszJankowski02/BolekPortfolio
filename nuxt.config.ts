// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', 'nuxt-icon', '@nuxt/image'],
  css: [
    "~/assets/styles/style.scss",
  ],
})
