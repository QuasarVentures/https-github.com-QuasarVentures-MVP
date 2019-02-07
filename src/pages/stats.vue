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
      selector: { state: 'CA', role: 'freelancer' }
    })
    this.california.workers = usersCA.docs.length

    const usersTX = await this.$usersdb.find({
      selector: { state: 'TX', role: 'freelancer' }
    })
    this.texas.workers = usersTX.docs.length

    const gigsCA = await this.$gigsdb.find({
      selector: { state: 'CA' }
    })
    this.california.gigs = gigsCA.docs.length

    const gigsTX = await this.$gigsdb.find({
      selector: { state: 'TX' }
    })
    this.texas.gigs = gigsTX.docs.length
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center.q-gutter-md
  .col-md-4
    q-card.stat.stat.text-center
      q-card-section
        .stat-title California
      q-card-section
        .stat-number {{california.gigs}}
        .stat-text {{$t('stats.gigs')}}
      q-card-section
        .stat-number {{california.workers}}
        .stat-text {{$t('stats.workers')}}
  .col-md-4
    q-card.stat.text-center
      q-card-section
        .stat-title Texas
      q-card-section
        .stat-number {{texas.gigs}}
        .stat-text {{$t('stats.gigs')}}
      q-card-section
        .stat-number {{texas.workers}}
        .stat-text {{$t('stats.workers')}}
</template>

<style lang="stylus">
.stat
  width 350px
  .stat-title
    font-size 24px
  .stat-number
    font-size 36px
  .stat-text
    font-size 20px
</style>
