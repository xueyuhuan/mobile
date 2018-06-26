const target='http://onetest.ccnu.edu.cn';
// const target='http://192.168.0.8:88/portal';
module.exports = {
  baseUrl:process.env.baseUrl,
  devServer:{
    proxy:{
      '/api':{
        target:target,
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      },
    }
  }
};