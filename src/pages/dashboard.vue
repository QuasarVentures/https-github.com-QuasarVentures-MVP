<script>
import { mapGetters } from 'vuex'

export default {
  name: 'dashboard',
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center.column
  h2 {{ $t('welcome') }}
  h4 {{ user && user.email }}
</template>

<style lang="stylus">
div.pdf-container
  width 100vw
  height 100vh
</style>
