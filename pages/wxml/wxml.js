// pages/wxml/wxml.js
Page({
  data: {
    isShow:true,
    movies:[
      '海王','盗梦空间','星际穿越','记忆大师'
    ]
  },
  handleSwitch(){
    this.setData({
      isShow:!this.data.isShow
    })
  }
})