<script>
import { mapGetters } from 'vuex'
// import PdfContract from 'src/components/PdfContract'

export default {
  name: 'dashboard',
  data: () => {
    return {
      insured: {
        principal: {
          lastName: 'Simpson',
          firstName: 'Homer',
          middleInitial: 'J',
          street: '742 Evergreen Terrace',
          city: 'Springfield',
          state: 'Oregon',
          zip: 12345,
          telephone: '1234567890',
          ssn: '1234567',
          birthday: '01/01/1970',
          sex: 'M',
          marital: 'Married'
        },
        beneficiary: {
          lastName: 'Simpson',
          firstName: 'Marjorie',
          middleInitial: 'B',
          street: '742 Evergreen Terrace',
          city: 'Springfield',
          state: 'Oregon',
          zip: 12345,
          relationship: 'Wife'
        },
        CED: '01/01/2019',
        DIED: '01/02/2019',
        CN: 'TEMP01',
        leasedTo: 'Leased to data',
        locationNumber: '123'
      }
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  components: {
    // PdfContract
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center.column
  h2 {{ $t('welcome') }}
  h4 {{ user && user.email }}
  // div.pdf-container
    // pdf-contract(:data="user")
</template>

<style lang="stylus">
div.pdf-container
  width 100vw
  height 100vh
</style>
