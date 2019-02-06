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
  h3 Welcome
  h4 {{user && user.email}}
</template>

<style lang="stylus">

</style>
