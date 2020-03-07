// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  hanndleShowToast(){
    wx.showToast({
      title: 'hello',
      icon: 'success',
      duration:3000,
      // 就是弹窗蒙版，阻止下面还有页面交互
      mask:true
    })
  },
  hanndleshowModel(){
    wx.showModal({
      title: 'world',
      content: '哈哈',
      // 不显示取消按钮
      // showCancel:false
      success:function(res){
        console.log(res)
        if(res.cancle){
          console.log('用户点击了取消按钮')
        }
        if(res.confirm){
          console.log('用户点击了确定按钮')
        }
      }
    })
  },

  hanndleshowLoading(){
    wx.showLoading({
      title: '加载中',
    })

    setTimeout(function () {
      // 调用方法才能取消showLoading效果
      wx.hideLoading()
    }, 2000)
  },

  hanndleshowActionSheet(){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },

  onShareAppMessage(options){
  // console.log(options)
  return{
    // 决定分享的文字内容，显示页面，图片
    title:'hello world',
    path:'/pages/about/about',
    imageUrl:'https://developers.weixin.qq.com/miniprogram/dev/component/image.html'
  }
  }
})