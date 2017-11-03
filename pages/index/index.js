//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData:{},
    imgUrl:""
  },
  //事件处理函数
 
  createAnimation(){
    this.animation=wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50% 0",
    })
  
    this.animation.rotate(50).scale(1.2, 1.2).step()
 
   
    this.animation.rotate(0).scale(0.9, 0.9).step({ duration: 5000})
    this.setData({
      animationData: this.animation.export()
    })

  },
  onLoad: function () {
   
  
  },

  choseImage:function(e){
    const _this=this;
    wx.chooseImage({
      count: 1,
      sizeType: [],
      sourceType: [],
      success: function(res) {
        console.log(res)
        _this.setData({
          imgUrl:res.tempFilePaths
        })
        _this.createAnimation()
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  }  



})
