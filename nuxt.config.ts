export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  vite: { server: { hmr: { overlay: false } } },
  devtools: { enabled: false },
  modules: ['@nuxt/ui', '@vueuse/nuxt', '@nookuio/nuxt']
});
