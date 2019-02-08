<script>
import { mapGetters } from 'vuex'

export default {
  name: 'users-list',
  data () {
    return {
      columns: [
        { name: 'firstName', label: this.$t('users.list.table.firstName'), field: 'firstName', sortable: true },
        { name: 'lastName', label: this.$t('users.list.table.lastName'), field: 'lastName', sortable: true },
        // { name: 'email', label: this.$t('users.list.table.email'), field: 'email', sortable: true },
        // { name: 'streetNumber', label: this.$t('users.list.table.streetNumber'), field: 'streetNumber', sortable: true },
        // { name: 'streetName', label: this.$t('users.list.table.streetName'), field: 'streetName', sortable: true },
        { name: 'city', label: this.$t('users.list.table.city'), field: 'city', sortable: true },
        { name: 'zip', label: this.$t('users.list.table.zip'), field: 'zip', sortable: true },
        { name: 'state', label: this.$t('users.list.table.state'), field: 'state', sortable: true },
        { name: 'ssn', label: this.$t('users.list.table.ssn'), field: 'ssn', sortable: true },
        { name: 'sex', label: this.$t('users.list.table.sex'), field: 'sex', sortable: true },
        { name: 'maritalStatus', label: this.$t('users.list.table.maritalStatus'), field: 'maritalStatus', sortable: true },
        { name: 'actions', label: '', field: '_id', sortable: false }
        // { name: 'phone', label: this.$t('users.list.table.phone'), field: 'phone', sortable: true }
      ],
      users: []
    }
  },
  async mounted () {
    this.users = (await this.$usersdb.allDocs({
      include_docs: true
    })).rows.filter(r => r.doc.role === 'freelancer').map(r => r.doc)
  },
  computed: {
    ...mapGetters('user', ['user'])
  }
}
</script>

<template lang="pug">
q-page.q-ma-md.flex.flex-center
  q-table.full-width(
    :title="$t('users.list.title')"
    :data="users"
    :columns="columns"
    row-key="_id"
    :rows-per-page-options="[10, 20, 50]"
  )
    q-tr(slot="body", slot-scope="props", :props="props")
      q-td(key="firstName", :props="props") {{ props.row.firstName }}
      q-td(key="lastName", :props="props") {{ props.row.lastName }}
      q-td(key="city", :props="props") {{ props.row.city }}
      q-td(key="zip", :props="props") {{ props.row.zip }}
      q-td(key="state", :props="props") {{ props.row.state }}
      q-td(key="ssn", :props="props") {{ props.row.ssn }}
      q-td(key="sex", :props="props") {{ $t(`profile.sex.${props.row.sex}`) }}
      q-td(key="maritalStatus", :props="props") {{ $t(`profile.maritalStatus.${props.row.maritalStatus}`) }}
      q-td(key="actions", :props="props")
        q-btn(
          v-if="user.role === 'manager'"
          color="primary"
          icon="mail"
          dense
          flat
        )
</template>

<style lang="stylus">

</style>
