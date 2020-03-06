// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    counter:0
  },
  handIncrement(){
    this.setData({
      counter: ++this.data.counter 
    })
  }
})