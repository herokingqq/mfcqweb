//index.js
//获取应用实例http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      {
        link: '../../image/index/banner1.jpg',
        url: '../../image/index/banner1.jpg'
      }, {
        link: '../../image/index/banner1.jpg',
        url: '../../image/index/banner2.jpg'
      }, {
        link: '../../image/index/banner1.jpg',
        url: '../../image/index/banner3.jpg'
      }   
    ], 
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 600, 

  },

//轮播图
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})