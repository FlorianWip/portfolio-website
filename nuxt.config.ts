// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from 'vite-svg-loader'

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
  },
  vite: {
    plugins: [svgLoader()]
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: ''
    }
  }
})
