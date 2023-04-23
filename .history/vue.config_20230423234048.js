modules.export={
    decServe:{
        proxy: {
            '/proxy': {
              target: 'http://example.com',
              changeOrigin: true
            }
          }
    }
}