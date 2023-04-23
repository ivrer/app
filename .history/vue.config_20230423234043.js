modules.export={
    decServe:{
        proxy: {
            '/api': {
              target: 'http://example.com',
              changeOrigin: true
            }
          }
    }
}