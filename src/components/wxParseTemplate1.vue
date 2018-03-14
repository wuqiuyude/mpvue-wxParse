<template src="./wxParseTemplate.html"></template>

<script>
import wxParseTemplate from './wxParseTemplate2'
import wxParseText from './wxParseText'
import wxParseImg from './wxParseImg'
import wxParseVideo from './wxParseVideo'

export default {
  name: 'wxParseTemplate1',
  props: {
    node: {}
  },
  components: {
    wxParseTemplate,
    wxParseText,
    wxParseImg,
    wxParseVideo
  }
}
</script>
