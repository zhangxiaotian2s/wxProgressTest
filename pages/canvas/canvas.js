// pages/canvas/canvas.js
import CutImg from '../../common/lib/cutimg'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    c_size: '',
   
    imgPosition:{
      c_height: 0,
      c_width: 0,
      startX:0,
      startY: 0,
      percent:1
    }
  },
  //设置canvas 宽高
  setCanvasSize() {
    const _this = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        _this.data.imgPosition.c_width = res.windowWidth;
        _this.data.imgPosition.c_height = res.windowHeight;
        _this.setData({
          c_size: `width:${_this.data.imgPosition.c_width}px;height:${_this.data.imgPosition.c_height}px`,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  //
  canvasInit() {
    const ctx = wx.createCanvasContext('myCanvas');
    const cutImg = new CutImg(ctx, this.data.imgPosition)
    cutImg.choseDrawImage()
   
  },
 
  





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setCanvasSize()
    this.canvasInit()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

})