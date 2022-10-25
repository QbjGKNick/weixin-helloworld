// pages/qweather/index.js
const api = require("../../utils/api")
const API = require("../../utils/api")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: null,
    latitude: null,
    markers: [],
    threedays: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const self = this
    // 在小程序中发送 https 的请求
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const { latitude, longitude, speed, accuracy } = res
        self.setData({
          latitude,
          longitude,
          markers: [{
            id: "0",
            latitude,
            longitude,
            iconPath: "/static/images/location.png",
            width: 40,
            height: 40,
            callout: {
              'display': 'ALWAYS',
              'fontSize': '30rpx',
              'content': '我在这',
              'padding': '8rpx',
              'boxShadow': '0 0 5rpx #333',
              'borderRadius': '4rpx'
            }
          }]
        })
        const location = `${longitude},${latitude}`
        console.log(location);
        let data = {
          location
        }
        api.threedays(data).then(res => {
          console.log(res)
          if (res.code === "200") {
            // 成功
            self.setData({
              threedays: res.daily
            })
          } else {
            // 失败
            wx.showToast({
              title: "正在获取天气数据"
            })
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})