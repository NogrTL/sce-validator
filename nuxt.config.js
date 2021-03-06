export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/sce-validator/' : '/'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    'bulma/bulma.sass',
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/toast'
  ],
  toast: {
    position: 'bottom-right',
    iconPack: 'fontawesome',
    duration: 2000,
    keepOnHover: true
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev) {
        config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
      }
    }
  }
}
