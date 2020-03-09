// components/w-back-top/w-back-top.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 控制page页面的移动
    handletop(){
      wx.pageScrollTo({
        scrollTop: 0,
      })
    }
  }
})
