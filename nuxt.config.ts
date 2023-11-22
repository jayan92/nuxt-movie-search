// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@vueuse/nuxt", "nuxt-icon"],
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY,
    apiBaseUrl: process.env.NUXT_API_BASE_URL,
    public: {
      publicImgBaseUrl: process.env.NUXT_PUBLIC_IMG_BASE_URL,
    },
  },
});
