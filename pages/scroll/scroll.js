// pages/scroll/scroll.js
Page({
  data: {

  },
  handleScroll(event){
    // console.log(event)
    console.log(event.detail.scrollTop)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})