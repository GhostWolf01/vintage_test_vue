module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/vintage_test_vue/'
  : '/' , 
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/scss/lib/_lib.scss";'
      }
    }
  }
}
