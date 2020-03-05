// pages/image/image.js
Page({
  data: {
    imagepath:''
  },
  handleChooseAlb(){
    // api wx.chooseImage
    wx.chooseImage({
      success:(res)=>{
        // console.log(res)//返回选中图片路径
       const path =  res.tempFilePaths[0]
      //  将选中的图片路径保存起来并引用
       this.setData({
        imagepath:path
       })

      }

  })
  },
  handleImageLoad(){
    console.log('image加载完成')
  }
})