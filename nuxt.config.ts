// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@bg-dev/nuxt-naiveui',
    'nuxt-aos',
    'nuxt-icon'
  ],
  typescript: {
    shim: false
  },
  naiveui: {
    colorModePreference: 'dark'
  }
})
