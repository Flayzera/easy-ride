<template>
  <div>a</div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ChatView',
  setup () {
    const username = ref('username')
    const messages = ref([])

    return {
      username,
      messages
    }
  }
}

</script>
