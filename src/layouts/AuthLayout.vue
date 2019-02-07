<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthLayout',
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated, class="glossy")
      q-toolbar
        q-toolbar-title MVP
        q-btn(
          v-if="user.role === 'manager'"
          :to="{ path: '/gigs' }"
          :label="$t('layout.menu.gigs')"
          icon="work"
          flat
        )
    q-page-container
      router-view
</template>
