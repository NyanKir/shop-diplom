export default {

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */

  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    '~assets/_variables.scss',
    '~assets/_fonts.scss',
    '~assets/global.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/test.client.js'
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      regular: true
    }
  },

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxtjs/style-resources',
    '@nuxt/http',
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true
  },
  styleResources: {
    scss: ['./assets/*.scss']
  },
  server: {
    port: 3000, // default: 3000
    host: 'localhost' // default: localhost,
  },
  /*
  ** Server Middleware
  */
  router: {
    middleware: ['authenticated']
  },
  serverMiddleware: {
    '/api': '~/api'
  },

  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
