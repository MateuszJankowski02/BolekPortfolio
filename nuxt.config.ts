// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icon', '@nuxt/image'],
  css: [
    "~/assets/styles/style.scss",
  ],
  image: {
    provider: 'netlify',
    presets: {
      default: {
        modifiers: {
          format: 'jpg',
          loader: 'lazy',
          quality: 100,
        },
      },
    }
  }
})
