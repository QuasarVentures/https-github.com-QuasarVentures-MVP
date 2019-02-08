<script>
import { mapGetters } from 'vuex'

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
        { name: 'worker', label: this.$t('gigs.list.table.assigned'), field: 'worker', align: 'center' },
        { name: 'actions', label: '', field: '_id', sortable: false }
      ],
      gigs: []
    }
  },
  async mounted () {
    this.gigs = (await this.$gigsdb.allDocs({
      include_docs: true
    })).rows
      .filter(r => !r.doc.views && (this.user.role !== 'freelancer' || (this.user.role === 'freelancer' && r.doc.state === this.user.state)))
      .map(r => r.doc)
  },
  methods: {
    async deleteGig (id, rev) {
      await this.$gigsdb.remove(id, rev)
      const idx = this.gigs.findIndex(d => d._id === id)
      this.gigs = [...this.gigs.slice(0, idx), ...this.gigs.slice(idx + 1)]
    },
    async assignGig (_id, idx) {
      const obj = await this.$gigsdb.get(_id)
      obj.worker = this.user.email
      const result = await this.$gigsdb.put({
        _id,
        _rev: obj._rev,
        ...obj
      })
      if (result.ok) {
        obj._rev = result.rev
        console.log(obj)
        this.gigs = [...this.gigs.slice(0, idx), obj, ...this.gigs.slice(idx + 1)]
      }
    },
    async unassignGig (_id, idx) {
      const obj = await this.$gigsdb.get(_id)
      obj.worker = null
      const result = await this.$gigsdb.put({
        _id,
        _rev: obj._rev,
        ...obj
      })
      if (result.ok) {
        obj._rev = result.rev
        console.log(obj)
        this.gigs = [...this.gigs.slice(0, idx), obj, ...this.gigs.slice(idx + 1)]
      }
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<template lang="pug">
q-page.q-ma-md.flex.column.items-end
  q-btn.q-mb-md(
    v-if="user.role === 'manager'"
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
    dense
  )
    q-tr(slot="body", slot-scope="props", :props="props")
      q-td(key="industry", :props="props") {{ $t(`gigs.industry.${props.row.industry}`) }}
      q-td(key="client", :props="props") {{ props.row.client }}
      q-td(key="job", :props="props") {{ props.row.job }}
      q-td(key="startDate", :props="props") {{ props.row.startDate }}
      q-td(key="startTime", :props="props") {{ props.row.startTime }}
      q-td(key="endDate", :props="props") {{ props.row.endDate }}
      q-td(key="endTime", :props="props") {{ props.row.endTime }}
      q-td(key="address", :props="props") {{ props.row.address }}
      q-td(key="state", :props="props") {{ props.row.state }}
      q-td(key="payment", :props="props") {{ props.row.payment }}
      q-td(key="worker", :props="props") {{ props.row.email }}
        q-icon(v-if="props.row.worker", name="account_box", color="green", size="24px")
          q-tooltip
           | {{ props.row.worker }}
      q-td(key="actions", :props="props")
        q-btn(
          v-if="user.role === 'manager'"
          color="primary"
          icon="edit"
          :to="{ path: `/gigs/${props.row._id}/edit` }"
          dense
          flat
        )
        q-btn(
          v-if="user.role === 'manager'"
          color="red"
          icon="delete"
          dense
          flat
          @click.native="() => deleteGig(props.row._id, props.row._rev)"
        )
        q-btn(
          v-if="user.role === 'freelancer' && props.row.worker === null"
          color="primary"
          icon="turned_in_not"
          dense
          flat
          @click.native="() => assignGig(props.row._id, props.row.__index)"
        )
        q-btn(
          v-if="user.role === 'freelancer' && props.row.worker === user.email"
          color="primary"
          icon="turned_in"
          dense
          flat
          @click.native="() => unassignGig(props.row._id, props.row.__index)"
        )
</template>

<style lang="stylus">

</style>
