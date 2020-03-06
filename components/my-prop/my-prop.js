// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 写法一
    // title:String
    title:{
      type:String,
      value:'我是默认显示',
      // 还可以监听数据变化,原来数据是默认value
      observer:function(newVal,oldValue){
        console.log(newVal,oldValue)
      }
    }
  },
  externalClasses:['titleclass']
})
