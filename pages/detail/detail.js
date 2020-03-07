// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleClick(){
    wx.navigateBack({

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
// 想改变别的页面数据，就得先获取页面
// 全局方法getCurrentPage
  const pages = getCurrentPages()
  console.log(pages)
  // 通过打印知道跳转页面
  const home = pages[pages.length -2]
  home.setData({
    message:'呵呵呵呵呵'
  })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})