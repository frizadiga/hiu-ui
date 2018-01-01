// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/ikan/'
  }
} : {}
module.exports = {
  // ** Config
  srcDir: 'src/',

  css: [
  // ** Transitions Routes
    'assets/main.css',
  ],
  
  // ** Headers of the page
  
  ...routerBase,
  head: {
    title: 'ikan - UI Framework',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ikan site' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://frizadiga.github.io/ikan/favicon.ico' }
    ]
  },
  
  // ** Customize the progress bar color
  
  loading: { color: '#35495e' },
  
  // ** Build configuration
  
  build: {
    
    // ** Run ESLint on save
    
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
