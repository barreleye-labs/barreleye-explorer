import { defineNuxtConfig } from 'nuxt/config'
import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate: 'Barreleye Explorer',
      title: 'Barreleye Explorer',
      charset: 'utf-8',
      meta: [
        { name: 'keywords', content: 'blockchain, explorer, nuxt3' },
        { name: 'description', content: 'Blockchain-based Barreleye' }
      ],
      link: []
    }
  },
  // exp
  experimental: {
    localLayerAliases: true
  },

  imports: {
    autoImport: true
  },

  devtools: { enabled: true },

  modules: ['@ant-design-vue/nuxt'],

  css: ['@/styles/main.scss'],

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
