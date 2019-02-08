<script>
export default {
  name: 'EmptyLayout',
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
        q-toolbar-subtitle.absolute-center MostValuableGig
        q-select(dense, options-dense, flat, borderless, v-model="locale", :options="locales" @input="val => changeLang(val)")
          template(v-slot:prepend)
            q-icon(name="language")
    q-page-container
      q-item.row
        .col-md-6.col-xs-3
          img.absolute-center(src="statics/stockArt/PropertyPurchase.png" style="opacity:0.8;max-height:80vh;transform: scaleX(-1),z-index:0")
        .col-md-6.col-xs-9
          router-view

</template>
