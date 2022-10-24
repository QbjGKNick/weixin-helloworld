// app.js
App({
  onLaunch() {
    console.log("onLaunch - 小程序加载")
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },

  onShow() {
    console.log("onShow - 小程序显示")
  },
  onHide() {
    console.log("onHide - 小程序显示")
  },
  globalData: {
    userInfo: null
  }
})
