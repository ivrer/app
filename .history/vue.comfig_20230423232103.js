const { defineConfig } = require('@vue/cli-service')




module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave : false,
  devServer:{
    proxy:{
      '/proxy':{
        target:'http://localhost:5566',
        changeOrigin:true,
        pathRewrite:{'^/proxy/':''}
      }
    }
  },
})