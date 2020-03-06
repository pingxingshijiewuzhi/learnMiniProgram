// components/my-style/my-style.js
Component({
options:{
  // 一定先把版本提高到2.7.0以上下面才有效
  // 这是引用组件影响被引用组件样式
  // styleIsolation:"apply-shared"
  
  // 相互影响
  styleIsolation:"shared"

  // isolation:隔离的意思，默认
  // styleIsolation:"isolated"
}
})
