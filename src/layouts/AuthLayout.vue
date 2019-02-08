<script>
import { mapGetters } from 'vuex'

export default {
  name: 'AuthLayout',
  computed: {
    ...mapGetters('user', ['user'])
  },
  data () {
    return {
      locale: this.$q.i18n || 'en',
      locales: ['en', 'es']
    }
  },
  methods: {
    changeLang (val) {
      this.$q.i18n = val
      this.$i18n.locale = val
    }
  }
}
</script>

<template lang="pug">
  q-layout(view="lHh Lpr lFf" style="overflow-x: hidden")
    q-header(elevated)
      q-toolbar
        q-toolbar-title MVG
        q-toolbar-subtitle MostValuableGig
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
          v-if="user.role === 'manager'"
          :to="{ path: '/gigs' }"
          :label="$t('layout.menu.gigs')"
          icon="work"
          flat
        )
        q-select(dense, text-color="white" options-dense, flat, borderless, v-model="locale", :options="locales" @input="val => changeLang(val)")
          template(v-slot:prepend)
            q-icon(name="language")
    q-page-container
      .col-md-6.col-xs-3
        img.absolute-left(src="statics/stockArt/Farmer.png" style="opacity:0.8;max-height:80vh;transform: scaleX(-1),z-index:0")
      .col-md-6.col-xs-9
        router-view
</template>
