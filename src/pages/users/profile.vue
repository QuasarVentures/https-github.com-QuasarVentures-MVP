<script>
import { mapGetters } from 'vuex'

export default {
  name: 'profile',
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center.column
  q-card.profile
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
  q-btn.q-mt-lg(
    color="primary"
    :label="$t('profile.downloadContract')"
  )
</template>

<style lang="stylus">
.profile
  min-width 350px
.profile-title
    font-weight 600
    font-size 28px
</style>
