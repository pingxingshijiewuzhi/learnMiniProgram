// pages/home/home.js
import {
  getMultiData,
  getGoodsData
} from '../../services/home.js'

const TOP_DISTANCE = 1000
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommend:[],
    titles: ['流行', '新款', '精选'],
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    currentType:'pop',
    isShowBack:false,
    isTabControl:false,
    tabScrollTop:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 请求轮播图数据和推荐数据
    this._getMultidata()
    // 请求商品数据
    this._getGoodsData('pop')
    this._getGoodsData('new')
    this._getGoodsData('sell')
  },
  handleTabClick(event){
    // 取出变化的index
    const index = event.detail.index
    // 设置currentType
    switch(index){
      case 0: this.setData({
        currentType: 'pop'
      })
      break;
      case 1: this.setData({
        currentType: 'new'
      })
        break;
      case 2: this.setData({
        currentType: 'sell'
      })
        break;
    }
  },
  _getMultidata(){
    getMultiData()
      .then(res => {
        console.log(res)
        // 拿取轮播图数据
        const banners = res.data.data.banner.list
        const recommend = res.data.data.recommend.list
        this.setData({
          banners,
          recommend
        })
      })
      .catch(err => {
        console.log(err)
      })
  },
  _getGoodsData(type){
    const page = this.data.goods[type].page + 1
    getGoodsData(type, page)
    .then(res=>{
      // 取出数据
      const list = res.data.data.list
      const oldlist = this.data.goods[type].list
      oldlist.push(...list)

      const datakey = `goods.${type}.list`
      const pagekey = `goods.${type}.page` 
      this.setData({
        [datakey]: oldlist,
        [pagekey]:page
      })
    })
    .catch(err=>{
      console.log(err)
    })
  },
  onReachBottom(){
    // 上拉加载更多->请求新的数据
    this._getGoodsData(this.data.currentType)
  },
  onPageScroll(options){
    // console.log(options)
    // 取出scrollTop
    const scrollTop = options.scrollTop

    const flag1 = scrollTop >= TOP_DISTANCE
    if (flag1 != this.data.isShowBack){
    // 修改isShowback属性
    this.setData({
      isShowBack: flag1
    })
    }
    // 修改isTabControl属性
    const flag2 = scrollTop >= this.data.tabScrollTop
    if (flag2 != this.data.isTabControl){
      this.setData({
        isTabControl:flag2
      })
    }
  
  },
  handleImageLoad(){
    // 图片加载完成过去tab-control告诉
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(rect => {
      console.log(rect)
      this.data.tabScrollTop =  rect.top;
    }).exec()
  }
})