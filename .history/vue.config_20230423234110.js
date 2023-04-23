modules.export={
    decServe:{
        proxy: {
            '/proxy': {
              target: 'http://localhost:5566',
              changeOrigin: true,
              path
            }
          }
    }
}