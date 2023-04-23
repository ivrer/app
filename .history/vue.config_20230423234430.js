modules.export={
    devServe:{
        proxy: {
            '/proxy': {
              target: 'http://localhost:5566',
              changeOrigin: true,
              pathRewrite:{
                "^/proxy":""
              }
            }
          }
    }
}