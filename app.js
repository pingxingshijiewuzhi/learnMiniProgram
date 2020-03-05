App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    // 可以通过默认传过来值判断小程序进入场景
    // console.log(options.scene)

    // 方法不能用
    wx.getUserInfo({
      // success(res){
      //   console.log(res)
      // }
      success:function(res){
        console.log(res)
      }
    })
      console.log('初始化')
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('界面被隐藏时会执行')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },


  // 除了监听生命周期，还可以设置一些全局变量共享
  gloData:{
    name:'wangzichi',
    age:18
  }
})
