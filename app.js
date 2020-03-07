const TOKEN = 'token'

App({
globalData:{
  token:''
},
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 不能每次登录都去存取tokoen
    const token = wx.getStorageSync(TOKEN)
    if(token && token.length !== 0){
        this.check_token(token)//验证token是否过期
    }else{//没有token进行登录操作
      this.login()
    }

  },
  check_token(token){
    console.log('执行了登录验证操作')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method:'post',
      header:{
        token
      },
      success:(res)=>{
        // 验证token是否有效
        if(!res.data.errCode){
          this.globalData.token = token;
        }else{
          this.login()
        }
      },
      fail:function(err){
        console.log(err)
      }
    })
  },
  login(){
console.log('执行了登录操作')
    // 登录操作
    wx.login({
      // 获取的code只有5分钟有效期
      success: (res) => {
        // 1.获取code
        console.log(res)
        const code = res.code
        // 2.将code发送公司服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res)
            // 1.取出token
            const token = res.data.token
            // 2.将token保存在globalData中
            this.globalData.token = token;

            // 3.进行本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }

})
