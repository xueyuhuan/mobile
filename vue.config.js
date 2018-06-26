const env = process.env.NODE_ENV;
let target = '';
if(env==='production'){  // 生产环境
  target = '';
}else if(env==='test'){ // 测试环境
  target = 'http://onetest.ccnu.edu.cn';
}else{  // 开发环境
  target = 'http://onetest.ccnu.edu.cn';
  //  target = ' http://192.168.0.8:88/portal';
}

module.exports = {
    // configure webpack-dev-server behavior
    devServer: {
        open: process.platform === 'darwin',
        disableHostCheck: true,
        host: '0.0.0.0',
        port: 1235,
        https: false,
        hotOnly: false,
        // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: {
            '/api':{
                target:'http://onetest.ccnu.edu.cn',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':''
              }
            }
        },
    },
}