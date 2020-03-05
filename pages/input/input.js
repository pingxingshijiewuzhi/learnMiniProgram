// pages/input/input.js
Page({
  data: {

  },
  handleInput(event){
    console.log(event.detail.value)
  },
  handleFocus(){
    console.log('触发焦点')
  },
  handleBlur(){
    console.log('焦点失去')
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})