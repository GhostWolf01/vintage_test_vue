module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/scss/lib/_lib.scss";'
      }
    }
  }
}
