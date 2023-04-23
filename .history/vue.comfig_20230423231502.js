const { defineConfig } = require('@vue/cli-service')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const {ElementPlusResolver} = require('unplugin-vue-components/resolvers')



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