export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  router: {
    base: process.env.DEPLOY_ENV === 'GH_PAGES' ? '/sce-validator/' : '/'
  },
  head: {
    script: [{ src: 'https://kit.fontawesome.com/f5b4b964bb.js' }],
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
  css: ['bulma/bulma.sass'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/eslint-module'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
  }
}
