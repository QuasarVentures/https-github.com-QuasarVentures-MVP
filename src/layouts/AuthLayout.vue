<script>
import { mapGetters } from 'vuex'
import LangPicker from 'src/components/LangPicker'

export default {
  name: 'AuthLayout',
  components: { LangPicker },
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<template lang="pug">
  q-layout(view="lHh Lpr lFf" style="overflow-x: hidden")
    q-header(elevated)
      q-toolbar
        q-toolbar-title
          h3 MVGiG
        q-btn(
          v-if="user.role === 'admin'"
          :to="{ path: '/stats' }"
          :label="$t('layout.menu.stats')"
          icon="work"
          flat
        )
        q-btn(
          v-if="user.role === 'manager'"
          :to="{ path: '/users' }"
          :label="$t('layout.menu.users')"
          icon="face"
          flat
        )
        q-btn(
          v-if="user.role === 'manager' || user.role === 'freelancer'"
          :to="{ path: '/gigs' }"
          :label="$t('layout.menu.gigs')"
          icon="work"
          flat
        )
        q-btn(
          v-if="user.role === 'freelancer'"
          :to="{ path: '/profile' }"
          :label="$t('layout.menu.profile')"
          icon="account_box"
          flat
        )
        LangPicker()

    q-page-container
      .col-md-6.col-xs-3
        img.fixed-left(:src="`statics/stockArt/${($route.meta && $route.meta.icon) || 'Farmer.png'}`" style="opacity:0.8;max-height:80vh;transform: scaleX(-1),z-index:0")
      .col-md-6.col-xs-9
        router-view
</template>
