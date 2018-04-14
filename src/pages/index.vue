<template lang="pug">
.container
  .raw(v-if="raw") {{readme}}
  wxParse(v-else, :content="readme", debug)
  .turn-btn(@click="raw = !raw") 切换
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
      raw: false,
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
