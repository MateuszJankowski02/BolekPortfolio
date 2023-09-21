// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase'],
  css: [
    "~/assets/styles/main.scss",
    "~/assets/styles/reset.scss",
  ],
})
