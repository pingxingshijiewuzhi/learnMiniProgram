// pages/home/home.js
Page({
  data: {

  },
  // 常见的事件类型
  handleBtnClick(){
    console.log('按钮被点击了')
  },
  handleTouchMove(){
    console.log('handleTouchMove')
  },
  handleTouchStart() {
    console.log('handleTouchStart')
  },
  handleTouchEnd(){
    console.log('handleTouchEnd')
  },
  handleLongpress(){
    console.log('超过350ms了handleLongpress')
  },

  // 捕获事件
  handleCaptureView1(){
    console.log('handleCaptureView1')
  },
  handleCaptureView2() {
    console.log('handleCaptureView2')
  },
  handleCaptureView3() {
    console.log('handleCaptureView3')
  },
  // 阻止事件冒泡
  handleCatchView1(){
    console.log('我是最外面大盒子，阻止事件捕获')
  },
  // 冒泡事件
  handleBindView1(){
    console.log('handleBindView1')
  },
  handleBindView2() {
    console.log('handleBindView2')
  },
  handleBindView3() {
    console.log('handleBindView3')
  }
})