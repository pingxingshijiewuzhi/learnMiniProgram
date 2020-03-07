import request from '../../service/network.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // -------1.原生发送网络请求------
    this.get_data_origin()

    // ---使用封装的request发送请求-----
    request({
      url: 'http://123.207.32.32:8000/api/wh/recommend'
    })
    .then(res=>{
      console.log(res)
    })
    .catch(err=>{
      console.log(err)
    })
  },
  get_data_origin(){
    // 1.发送最简单的网络请求
    // wx.request({
    //   url:'http://123.207.32.32:8000/api/wh/recommend',
    //   success:function(res){
    //     console.log(res)
    //   }
    // })

    // 2.个体请求，并且发送参数,就是加data选项
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/wh/recommend',
    //   data:{
    //     type:'',
    //     page:1
    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })

    // 3.post请求加参数
    // wx.request({
    //   url: 'http://123.207.32.32:8000/api/wh/recommend',
    //   method: 'post',
    //   data: {

    //   },
    //   success: function (res) {
    //     console.log(res)
    //   }
    // })
  },

})