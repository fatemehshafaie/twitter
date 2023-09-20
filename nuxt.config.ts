import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, user-scalable=0',
      title: 'twitter',
      // meta: [{ name: 'google-site-verification', content: 'uRV1wiDAnGm7Iy39XnwlJ23_Ja0t4rrqjEUeiTnWJ2A' }],
      link: [
        // { rel: 'icon', type: "image/x-icon", href: "/favicon/favicon.ico" },
      ],
      script: [
      ],
    },

  },
  typescript: {
    shim: false
  },
  css: ['~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/vue-fontawesome',
      'chart.js'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // plugins: [
  //  { src: "~/plugins/typed.js", ssr: true }
  // ]


})