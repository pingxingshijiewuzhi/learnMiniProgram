// pages/home/childCpns/w-recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 判断加载完成状态
    isLoad:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLoad(){
      if (!this.data.isLoad){
      console.log('加载完成')
      this.triggerEvent('imageLoad')
      // 这样改数据，页面不刷新，但是这里不影响
      this.data.isLoad = true
      }
    }
  }
})
