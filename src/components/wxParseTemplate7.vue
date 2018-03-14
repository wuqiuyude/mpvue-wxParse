<template src="./wxParseTemplate.html"></template>

<script>
import wxParseTemplate from './wxParseTemplate8'
import wxParseText from './wxParseText'
import wxParseImg from './wxParseImg'
import wxParseVideo from './wxParseVideo'

export default {
  name: 'wxParseTemplate7',
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
