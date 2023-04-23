uni.request({
    url: 'request/login',
    success: (res) => {
        console.log(res.data);
   
    }
});


uni.addInterceptor('request', {
  invoke(args) {
    // request 触发前拼接 url 
    args.url = 'https://www.example.com/'+args.url
  },
  success(args) {
    // 请求成功后，修改code值为1
    args.data.code = 1
  }, 
  fail(err) {
    console.log('interceptor-fail',err)
  }, 
  complete(res) {
    console.log('interceptor-complete',res)
  }
})

uni.addInterceptor({
  returnValue(args) {
    // 只返回 data 字段
    return args.data
  }
})


//这是官方的拦截器

// 
