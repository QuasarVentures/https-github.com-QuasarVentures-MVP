<template lang="pug">
q-select(
  v-model="locale"
  :options="locales"
  dense
  flat
  borderless
  emit-value
  map-options
  options-dense
  style="min-width: 82px"
  dropdown-icon="language"
)
</template>

<script>

export default {
  name: 'LangPicker',
  props: ['data'],
  data () {
    return {
      locale: this.$q.lang.isoName || 'en-us',
      locales: null,
      languages: [
        {
          nativeName: 'English',
          isoName: 'en-us'
        },
        {
          nativeName: 'Español',
          isoName: 'es'
        }
      ]
    }
  },
  watch: {
    locale (locale) {
      this.$i18n.locale = locale
      import(`quasar/lang/${locale}`).then(locale => {
        this.$q.lang.set(locale.default)
      })
    }
  },
  created () {
    this.locales = this.languages.map(lang => ({
      label: lang.nativeName, value: lang.isoName
    }))
  }
}
</script>
