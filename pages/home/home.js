// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  tabControlClick(event){
    console.log(event)
    // 可以拿到组件传过来的数据
    console.log(event.detail)
  },
  handleIncrement(){
    // 修改组件my-sel数据
    // 组件对象.setData({})

    // 1.父组件获取组件对象方法
    // this.selectComponent('class/id')    
    const my_sel = this.selectComponent('#sel-id')
    
    //2. 不建议在这直接修改子组件数据
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })
     
    // 3.通过方法修改
    my_sel.increment(20)
  }
})