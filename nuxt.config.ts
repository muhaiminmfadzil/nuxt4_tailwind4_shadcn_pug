import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxt/test-utils', 'shadcn-nuxt'],

  css: ['~/assets/css/tailwind.css', '~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()]
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: 'V',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: '~/components/ui'
  }
})
