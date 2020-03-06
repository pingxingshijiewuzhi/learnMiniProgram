// components/my-multiple-slot/my-multiple-slot.js
Component({
  // ------让使用者可以给组件传入数据--------
  properties:{
    title:{
      type:String,
      value:'',
      observer:function(newVal,oldVal){

      }
    }
  },

  // -------定义组件内部的初始化数据-----
  data:{
    counter:0
  },
  //-------页面里直接写方法，但组件定义方法在methods---
  methods:{

  } ,
  // ---定义组件的配置选项----
  // multipleSlots:使用多插槽
  // styleIsolation:设置样式隔离方式
  options:{
    multipleSlots:true
  },
  // -----外界给组件传入额外的样式-----
  externalClass:[],
  // ---可以监听properties/data的改变，但是这里获取不oldvalue
  observers:{
    counter:function(newVal){
      console.log(newVal)
    }
  },
  // ---组件监听所在页面的生命周期------
  pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来时')
    },
    resize(){
      console.log('监听页面尺寸的改变')
    },
    hide(){
      console.log('监听页面所在也买你隐藏起来时')
    }
  },
  // ---组件监听组件本身的生命周期------
  lefetimes:{
    created(){
      console.log('created')
    },
    attached(){
      console.log('组件被添加到页面')
    },
    ready(){
      console.log('组件被渲染出来')
    },
    moved(){
      console.log('组件被移动到另一个节点')
    },
    detached(){
      console.log('组件被移除')
    }
  }
})
