<template lang="pug">
.container
  wxParse(:content="article", debug)
</template>

<script>
import wxParse from 'mpvue-wxparse'

export default {
  components: {
    wxParse
  },
  data () {
    return {
      article: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      wx.showLoading({ title: '加载中' })
      const list = await this.$request.get('https://news-at.zhihu.com/api/4/news/latest')
      const article = list.data.stories[0] || {}
      const detail = await this.$request.get(`https://news-at.zhihu.com/api/4/news/${article.id}`)
      this.article = detail.data.body
      wx.hideLoading()
    }
  }
}
</script>
