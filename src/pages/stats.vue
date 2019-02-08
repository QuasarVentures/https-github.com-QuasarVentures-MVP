<script>
export default {
  name: 'stats',
  data () {
    return {
      california: {
        gigs: 0,
        workers: 0
      },
      texas: {
        gigs: 0,
        workers: 0
      }
    }
  },
  async mounted () {
    const usersCA = await this.$usersdb.find({
      selector: { state: 'California', role: 'freelancer' }
    })
    this.california.workers = usersCA.docs.length

    const usersTX = await this.$usersdb.find({
      selector: { state: 'Texas', role: 'freelancer' }
    })
    this.texas.workers = usersTX.docs.length

    const gigsCA = await this.$gigsdb.find({
      selector: { state: 'California' }
    })
    this.california.gigs = gigsCA.docs.length

    const gigsTX = await this.$gigsdb.find({
      selector: { state: 'Texas' }
    })
    this.texas.gigs = gigsTX.docs.length
  }
}
</script>

<template lang="pug">
q-page.q-ma-lg
  h5 California
  .row.q-col-gutter-md
    .col-md-3.col-xs-6.offset-md-6
      q-card.stat.text-center.bg-purple.text-white
        q-icon(name="work")
        q-card-section
          .stat-number {{california.gigs}}
          .stat-text {{$t('stats.gigs')}}
    .col-md-3.col-xs-6
      q-card.stat.text-center.bg-indigo.text-white
        q-icon(name="face")
        q-card-section
          .stat-number {{california.workers}}
          .stat-text {{$t('stats.workers')}}
    .col-md-3.col-xs-6.offset-md-6
      q-card.stat.text-center.bg-teal.text-white
        q-icon(name="assignment")
        q-card-section
          .stat-number 84%
          .stat-text Employment
    .col-md-3.col-xs-6
      q-card.stat.text-center.bg-deep-orange.text-white
        q-icon(name="assignment_ind")
        q-card-section
          .stat-number 1540
          .stat-text Contracts

  h5 Texas
  .row.q-col-gutter-md
    .col-md-3.col-xs-6.offset-md-6
      q-card.stat.text-center.bg-purple.text-white
        q-icon(name="work")
        q-card-section
          .stat-number {{texas.gigs}}
          .stat-text {{$t('stats.gigs')}}
    .col-md-3.col-xs-6
      q-card.stat.text-center.bg-indigo.text-white
        q-icon(name="face")
        q-card-section
          .stat-number {{texas.workers}}
          .stat-text {{$t('stats.workers')}}
    .col-md-3.col-xs-6.offset-md-6
      q-card.stat.text-center.bg-teal.text-white
        q-icon(name="assignment_ind")
        q-card-section
          .stat-number 91%
          .stat-text Employment
    .col-md-3.col-xs-6
      q-card.stat.text-center.bg-deep-orange.text-white
        q-icon(name="assignment")
        q-card-section
          .stat-number 1035
          .stat-text Contracts

</template>

<style lang="stylus">
@import '~quasar-variables'
h5
  text-align right
  font-size 32px
  margin 10px 0
  padding-top 10px
.stat
  position relative
  overflow hidden
  .q-icon
    font-size 120px
    position absolute
    top -20px
    left -20px
    opacity 0.3
  .stat-number
    font-size 60px
    @media (max-width $breakpoint-sm-max)
      font-size 48px
  .stat-text
    font-size 32px
    @media (max-width $breakpoint-sm-max)
      font-size 28px
</style>
