import PouchDB from 'pouchdb'
import PouchDBFind from 'pouchdb-find'

export default async ({ Vue }) => {
  PouchDB.plugin(PouchDBFind)
  Vue.prototype.$usersdb = new PouchDB('users')
  Vue.prototype.$usersdb.createIndex({
    index: { fields: ['state', 'role'] }
  })
  Vue.prototype.$gigsdb = new PouchDB('gigs')
  Vue.prototype.$gigsdb.createIndex({
    index: { fields: ['state'] }
  })
}
