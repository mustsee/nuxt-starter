export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-starter",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/css/reset.css", "@/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/clear-console.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ["~/components", "~/components/header", "~/components/footer"],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome", "@nuxtjs/google-fonts"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/i18n",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // https://nuxtjs.org/docs/configuration-glossary/configuration-env/
  env: {
    apiKey: process.env.AIRTABLE_KEY || "apiKey ENV doesnt work",
    stepsDB: process.env.STEPS_HOSTEL_BASE || "stepsDB ENV sdoesnt work",
  },

  // google font module options
  googleFonts: {
    families: {
      Outfit: [400],
    },
    display: "auto",
  },

  // axios module options
  axios: {},

  // fontawesome module options
  fontawesome: {
    icons: {
      solid: ["faHotel", "faGlobe"],
    },
  },

  // i18n module options
  i18n: {
    locales: [
      {
        code: "en",
        iso: "en",
        file: "en.js",
        dir: "ltr",
        name: "english",
      },
      {
        code: "fr",
        iso: "fr",
        file: "fr.js",
        dir: "ltr",
        name: "french",
      },
      {
        code: "es",
        iso: "es",
        file: "es.js",
        dir: "ltr",
        name: "spanish",
      },
    ],
    langDir: "~/locales/",
    defaultLocale: "en",
    vueI18n: {
      fallbackLocale: "en",
    },
  },
};
