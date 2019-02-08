<script>
export default {
  name: 'gigs-list',
  data () {
    return {
      columns: [
        { name: 'industry', label: this.$t('gigs.list.table.industry'), field: 'industry', sortable: true },
        { name: 'client', label: this.$t('gigs.list.table.client'), field: 'client', sortable: true },
        { name: 'job', label: this.$t('gigs.list.table.job'), field: 'job', sortable: true },
        { name: 'startDate', label: this.$t('gigs.list.table.startDate'), field: 'startDate', sortable: true },
        { name: 'startTime', label: this.$t('gigs.list.table.startTime'), field: 'startTime', sortable: true },
        { name: 'endDate', label: this.$t('gigs.list.table.endDate'), field: 'endDate', sortable: true },
        { name: 'endTime', label: this.$t('gigs.list.table.endTime'), field: 'endTime', sortable: true },
        { name: 'address', label: this.$t('gigs.list.table.address'), field: 'address', sortable: true },
        { name: 'state', label: this.$t('gigs.list.table.state'), field: 'state', sortable: true },
        { name: 'payment', label: this.$t('gigs.list.table.payment'), field: 'payment', sortable: true },
        { name: 'actions', label: '', field: '_id', sortable: false }
      ],
      gigs: []
    }
  },
  async mounted () {
    this.gigs = (await this.$gigsdb.allDocs({
      include_docs: true
    })).rows.filter(r => !r.doc.views).map(r => r.doc)
  },
  methods: {
    async deleteGig (id, rev) {
      await this.$gigsdb.remove(id, rev)
      const idx = this.gigs.findIndex(d => d._id === id)
      this.gigs = [...this.gigs.slice(0, idx), ...this.gigs.slice(idx + 1)]
    }
  }
}
</script>

<template lang="pug">
q-page.q-ma-md.flex.column.items-end
  q-btn.q-mb-md(
    color="primary"
    :label="$t('gigs.list.new')"
    :to="{ path: '/gigs/create' }"
  )
  q-table.full-width(
    :title="$t('gigs.list.title')"
    :data="gigs"
    :columns="columns"
    row-key="_id"
    :rows-per-page-options="[10, 20, 50]"
  )
    q-tr(slot="body", slot-scope="props", :props="props")
      q-td(key="industry", :props="props") {{ props.row.industry }}
      q-td(key="client", :props="props") {{ props.row.client }}
      q-td(key="job", :props="props") {{ props.row.job }}
      q-td(key="startDate", :props="props") {{ props.row.startDate }}
      q-td(key="startTime", :props="props") {{ props.row.startTime }}
      q-td(key="endDate", :props="props") {{ props.row.endDate }}
      q-td(key="endTime", :props="props") {{ props.row.endTime }}
      q-td(key="address", :props="props") {{ props.row.address }}
      q-td(key="state", :props="props") {{ props.row.state }}
      q-td(key="payment", :props="props") {{ props.row.payment }}
      q-td(key="actions", :props="props")
        q-btn(
          color="primary"
          icon="edit"
          :to="{ path: `/gigs/${props.row._id}/edit` }"
          dense
          flat
        )
        q-btn(
          color="red"
          icon="delete"
          dense
          flat
          @click.native="() => deleteGig(props.row._id, props.row._rev)"
        )
</template>

<style lang="stylus">

</style>
