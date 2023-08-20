import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@ant-design-vue/nuxt'
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ]
})
