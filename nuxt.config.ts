// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  css: ['~/assets/css/main.css'],
  vite: { server: { hmr: { overlay: false } } },
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@nookuio/nuxt', '@vueuse/nuxt'],
  future: { compatibilityVersion: 4 },
});
