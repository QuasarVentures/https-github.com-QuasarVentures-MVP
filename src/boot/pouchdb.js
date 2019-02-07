import PouchDB from 'pouchdb'

export default async ({ Vue }) => {
  Vue.prototype.$usersdb = new PouchDB('users')
  Vue.prototype.$gigsdb = new PouchDB('gigs')
}
