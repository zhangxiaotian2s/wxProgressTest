// pages/personCenter/personCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    needChange:false,
    animationData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  createAnimation() {
    this.animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "linear",
      delay: 0,
      transformOrigin: "50% 50% 0",
    })

    this.animation.rotate(50).scale(1.2, 1.2).step()


    this.animation.rotate(0).scale(0.9, 0.9).step({ duration: 5000 })
    this.setData({
      animationData: this.animation.export()
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      needChange:true
    })
    this.createAnimation()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({
      needChange: true
    })
    this.createAnimation()
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})