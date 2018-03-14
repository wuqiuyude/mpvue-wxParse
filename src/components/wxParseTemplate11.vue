<template>
  <wx-parse-text :node="node" />
</template>

<script>
import wxParseText from './wxParseText'

export default {
  name: 'wxParseTemplate11',
  props: {
    node: {}
  },
  components: {
    wxParseText
  }
}
</script>
