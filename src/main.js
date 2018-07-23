import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['pages/logs/main', 'pages/index/main', 'pages/kinds/main', 'pages/order/main', '^pages/mine/main', 'pages/to-pay-order/main','pages/goods-details/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#ff3366',
      navigationBarTitleText: '线上书城',
      navigationBarTextStyle: '#fff',
    },
    tabBar: {
      color: "#8a8a8a",
      selectedColor: "#ff3366",
      backgroundColor: "#fff",
      borderStyle: "#a8a8a8",
      list: [
        {
          pagePath: "pages/index/main",
          iconPath: "static/images/home.png",
          selectedIconPath: "static/images/home1.png",
          // color:"white",
          text: "首页"
        },
        {
          pagePath: "pages/kinds/main",
          iconPath: "static/images/kind.png",
          selectedIconPath: "static/images/kind1.png",
          text: "分类"
        },
        {
          pagePath: "pages/order/main",
          iconPath: "static/images/order.png",
          selectedIconPath: "static/images/order1.png",
          text: "购物车",
          navigationBarTitleText: "购物车"
        },
        {
          pagePath: "pages/mine/main",
          iconPath: "static/images/wo.png",
          selectedIconPath: "static/images/wo1.png",
          text: "我的"
        }
      ]
    }
  }
}
