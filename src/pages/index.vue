<template lang="pug">
.container
  wxParse(:content="readme", debug)
</template>

<script>
import marked from 'marked'
import wxParse from 'mpvue-wxparse'

export default {
  components: {
    wxParse
  },
  data () {
    return {
      readme: ''
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      wx.showLoading({ title: '加载中' })
      const res = await this.$request.get('https://gitlab.com/F-loat/mpvue-wxParse/raw/master/README.md')
      this.readme = marked(res.data)
      wx.hideLoading()
    }
  }
}
</script>
