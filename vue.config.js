const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/assets/scss/reset.scss";
          @import "@/assets/scss/variables.scss";
        `
      }
    }
  }
})
