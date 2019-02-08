<script>
import LangPicker from 'src/components/LangPicker'

export default {
  name: 'EmptyLayout',
  components: { LangPicker }
}
</script>

<template lang="pug">
  q-layout(view="lHh Lpr lFf" style="overflow-x: hidden")
    q-header(elevated)
      q-toolbar
        q-toolbar-title
          h3 MVGgig
        LangPicker()

    q-page-container
      q-item.row
        .col-md-6.col-xs-2
          img.absolute-center(src="statics/stockArt/PropertyPurchase.png" style="opacity:0.8;max-height:80vh;transform: scaleX(-1),z-index:0")
        .col-md-6.col-xs-9
          router-view

</template>
