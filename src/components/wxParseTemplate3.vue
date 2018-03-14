<template src="./wxParseTemplate"></template>

<script>
import wxParseTemplate from './wxParseTemplate4'
import wxParseText from './wxParseText'
import wxParseImg from './wxParseImg'
import wxParseVideo from './wxParseVideo'

export default {
  name: 'wxParseTemplate3',
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
