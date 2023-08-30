import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  imports: {
    autoImport: true
  },

  devtools: { enabled: true },

  modules: [
    '@ant-design-vue/nuxt'
  ],

  css: [
    '@/styles/main.scss'
  ],

  components: [
    {
      path: '~/components',
      pathPrefix: false
    },
    {
      prefix: 'Barreleye',
      path: resolve('./components/barreleye'),
      global: true
    }
  ],

  devServer: {
    port: 3003
  }
})
