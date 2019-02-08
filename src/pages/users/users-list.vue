<script>
import { mapGetters } from 'vuex'

export default {
  name: 'users-list',
  data () {
    return {
      mail: false,
      email: '',
      inception: false,
      name: false,
      message: '',
      columns: [
        { name: 'firstName', label: this.$t('users.list.table.firstName'), field: 'firstName', sortable: true },
        { name: 'lastName', label: this.$t('users.list.table.lastName'), field: 'lastName', sortable: true },
        // { name: 'email', label: this.$t('users.list.table.email'), field: 'email', sortable: true },
        // { name: 'streetNumber', label: this.$t('users.list.table.streetNumber'), field: 'streetNumber', sortable: true },
        // { name: 'streetName', label: this.$t('users.list.table.streetName'), field: 'streetName', sortable: true },
        { name: 'city', label: this.$t('users.list.table.city'), field: 'city', sortable: true },
        // { name: 'zip', label: this.$t('users.list.table.zip'), field: 'zip', sortable: true },
        { name: 'state', label: this.$t('users.list.table.state'), field: 'state', sortable: true },
        { name: 'sex', label: this.$t('users.list.table.sex'), field: 'sex', sortable: true },
        // { name: 'maritalStatus', label: this.$t('users.list.table.maritalStatus'), field: 'maritalStatus', sortable: true },
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
  },
  methods: {
    async deleteUser (id, rev) {
      await this.$usersdb.remove(id, rev)
      const idx = this.users.findIndex(d => d._id === id)
      this.users = [...this.users.slice(0, idx), ...this.users.slice(idx + 1)]
    },
    renderMail () {
      return `${this.$t('welcome')} ${this.name}`
    },
    sendMail (mail, name) {
      this.inception = true
      this.mail = mail
      this.name = name
    },
    sendMsgNow () {
      this.$refs.messager.hide()
      this.$q.notify({ message: `Message sent to ${this.mail}` })
    }
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
    dense
  )
    q-tr(slot="body", slot-scope="props", :props="props")
      q-td(key="firstName", :props="props") {{ props.row.firstName }}
      q-td(key="lastName", :props="props") {{ props.row.lastName }}
      q-td(key="city", :props="props") {{ props.row.city }}
      q-td(key="state", :props="props") {{ props.row.state }}
      q-td(key="sex", :props="props") {{ $t(`profile.sex.${props.row.sex}`) }}
      q-td(key="actions", :props="props")
        q-btn(
          v-if="user.role === 'manager'"
          color="primary"
          icon="mail"
          dense
          flat
          @click.native="() => sendMail(props.row.email, props.row.firstName)"
        )
        q-btn(
          v-if="user.role === 'manager'"
          color="red"
          icon="delete"
          dense
          flat
          @click.native="() => deleteUser(props.row._id, props.row._rev)"
        )
  q-dialog.fixed-center(ref="messager" v-model="inception" v-if="inception")
    q-card
      q-bar.bg-blue-grey-5
        q-icon(name="mail")
        .text-weight-bold {{ $t('sendMessage') }}
        q-space
        q-btn(flat dense icon="send" color="white" @click="() => sendMsgNow()")
        q-btn(flat dense icon="close" color="white" v-close-dialog)
      q-card-section
        q-editor(ref="editor" :value="$t('welcome') + ' ' + name")

</template>

<style lang="stylus">

</style>
