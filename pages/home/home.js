// pages/home/home.js
// 可以通过getApp()获取App()产生的单例对象
const app = getApp()
console.log(app.gloData)

Page({
    data:{
      name:'coderwzch',
      age:18,
      children:[
        {id:110,name:'kobo',height:188},
        {id:120,name:'二哥',height:18},
        {id:130,name:'三个',height:177},
        {id:140,name:'锅煽豆腐',height:199}
      ],
      numberss:[324,43,45,456,43,345,3,4,4,5,4,4,5,5,5,55,5,5,5,5,6,66,6,66,6,6,66,,64,45,54,54,45,544,5442,353,6,643,456,546654,456,45,643456,34,456,456,6,75467,567,547,5675675,56,7],
      counter:0
    },
    handleBtnclick(){
      // 1.错误做法：界面不会刷新的
      // this.data.counter += 1
      // console.log(this.data.counter)

      // 2.this.setData()才能实现双向数据绑定
      this.setData({
        // counter:this.data.counter + 1
        counter: ++this.data.counter
      })
    },
    handlesubtaution(){
      this.setData({
        // counter: this.data.counter - 1
        counter: --this.data.counter
      })
    },
    // 通过监听事件，而时间类型是getuserinfo，来获取用户信息
    handleaaa(event){
      console.log(event)
  },

  onLoad(){
// 页面加载
  },
  onReady(){
// 页面显示出来时
  },
  onShow(){
// 页面初次渲染完成时,再次进入页面不会被选中
  },
  onHide(){

  },
  onUnload(){

  },
  // 监听页面滚动
  onPageScroll(obj){
    // console.log(obj)
  },
  // 监听页面滚动到底部
  onReachBottom(){
console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})