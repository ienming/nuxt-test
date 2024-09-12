// https://nuxt.com/docs/api/configuration/nuxt-config
// https://nuxt.com/modules/ant-design-vue
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@ant-design-vue/nuxt', '@pinia/nuxt'],
  antd: {},
})