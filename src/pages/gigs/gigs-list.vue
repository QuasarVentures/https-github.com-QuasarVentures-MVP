<script>
export default {
  name: 'gigs-list'
}
</script>

<template lang="pug">
q-page
  q-btn(
    label="New GIG"
    :to="{ path: '/gigs/create' }"
  )
</template>

<style lang="stylus">

</style>
