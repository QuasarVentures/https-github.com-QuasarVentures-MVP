<script>
import { mapGetters } from 'vuex'
import PdfContract from 'src/components/PdfContract'
import { openURL } from 'quasar'
export default {
  name: 'profile',
  computed: {
    ...mapGetters('user', ['user'])
  },
  data () {
    return {
      contract: false,
      insured: {
        principal: {
          lastName: ' ',
          firstName: ' ',
          middleInitial: ' ',
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
        CED: ' ',
        DIED: ' ',
        CN: ' ',
        leasedTo: 'Leased to data',
        locationNumber: ' '
      }
    }
  },
  components: {
    PdfContract
  },
  methods: {
    docuSign () {
      openURL('https://www.docusign.com/')
    }
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center.column
  .row.q-ma-sm
    q-btn.q-ma-lg(
      v-if="!contract"
      color="primary"
      :label="$t('profile.downloadContract')"
      @click="contract = true"
    )
    q-btn.q-ma-lg(
      v-if="!contract"
      color="yellow"
      text-color="black"
      :label="$t('Sign with Docusign')"
      @click="docuSign()"
    )
    q-btn.q-ma-md.absolute-top-left(
      v-if="contract"
      color="red-8"
      icon="close"
      @click="contract = false"
      round
    )
  q-card.profile(v-if="!contract")
    q-card-section.flex.justify-between
      .profile-title {{ user.firstName }} {{ user.lastName }}
      q-btn(
        color="primary"
        icon="edit"
        :to="{ path: '/profile/edit' }"
        dense
        flat
      )
    q-separator
    q-card-section
      .flex.column
        .col-12 {{ user.email }}
        .col-12 {{ $t(`profile.sex.${user.sex}`) }} {{ $t(`profile.maritalStatus.${user.maritalStatus}`) }}
    q-separator
    q-card-section
      .flex.column
        .col-12 {{ user.streetNumber }} {{ user.streetName }}
        .col-12 {{ user.city }} {{ user.zip }}
        .col-12 {{ user.state }}
        .col-12 {{ user.phone }}
    q-separator
    q-card-section
      .flex.column
        .col-12 SSN: {{ user.ssn }}
  div.pdf-container(v-if="contract")
    pdf-contract(:data="insured" ref="insurance")
</template>

<style lang="stylus">
html, body
  overflow-y hidden!important
.profile
  min-width 350px
.profile-title
    font-weight 600
    font-size 28px
</style>
