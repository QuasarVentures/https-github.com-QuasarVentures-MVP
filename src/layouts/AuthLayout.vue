<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthLayout',
  data () {
    return {
      menu: true
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<template lang="pug">
  q-layout(view="lHh Lpr lFf")
    q-header(elevated, class="glossy")
      q-toolbar
        q-btn(
          flat
          @click="menu = !menu"
          round
          dense
          icon="menu"
        )
        q-toolbar-title MVP
    q-drawer(
      v-model="menu"
      :width="200"
      :breakpoint="700"
      show-if-above
    )
      q-scroll-area.fit
        q-list.menu-list(padding)
          q-item(
            clickable
            v-ripple
          )
            q-item-section(avatar)
              q-icon(name="account_box")
            q-item-section {{$t('layout.menu.profile')}}
          q-separator
          q-item(
            v-if="user.role === 'manager'"
            clickable
            v-ripple
            :to="{ path: '/gigs' }"
          )
            q-item-section(avatar)
              q-icon(name="work")
            q-item-section {{$t('layout.menu.gigs')}}
    q-page-container
      router-view
</template>
