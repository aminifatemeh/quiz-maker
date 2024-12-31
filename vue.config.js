const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/',
  devServer: {
    historyApiFallback: true // Ensure the server serves the index.html for any route
  }
})
