import Vue from 'vue'
import Fly from 'flyio/dist/npm/wx'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$request = new Fly()

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: ['^pages/index'],
    window: {
      backgroundTextStyle: 'dark',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'mpvue-wxParse 示例',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      position: 'top',
      list: [
        {
          pagePath: 'pages/index',
          text: '介绍'
        }, {
          pagePath: 'pages/zhihu',
          text: '知乎日报'
        }
      ]
    }
  }
}
