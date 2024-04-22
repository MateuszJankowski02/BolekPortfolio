// https://nuxt.com/docs/api/configuration/nuxt-config
import autoprefixer from "autoprefixer";

export default defineNuxtConfig({
  $development: {
    devtools: { enabled: true },
    modules: ['nuxt-icon', '@nuxt/image'],
    css: [
      "~/assets/styles/style.scss",
    ],
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: {},
      }
    },
    image: {
      provider: 'ipx',
      presets: {
        default: {
          modifiers: {
            format: 'jpg',
            loader: 'preload',
            quality: 100,
          },
        },
      }
    }
  },
  $production: {
    devtools: { enabled: false },
    modules: ['nuxt-icon', '@nuxt/image'],
    css: [
      "~/assets/styles/style.scss",
    ],
    postcss: {
      plugins: {
        autoprefixer: {},
        cssnano: {},
      }
    },
    image: {
      provider: 'netlify',
      presets: {
        default: {
          modifiers: {
            format: 'jpg',
            loader: 'preload',
            quality: 100,
          },
        },
      }
    }
  },
})
