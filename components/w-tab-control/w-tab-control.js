// components/w-tab-contral/w-tab-contral.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      // 通过点击拿到点击下表
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })

      this.triggerEvent('itemclick', { index, title: this.properties.titles[index]},{})
    }
  }
})
