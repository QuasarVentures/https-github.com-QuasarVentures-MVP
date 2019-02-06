import PouchDB from 'pouchdb'

export default async ({ Vue }) => {
  Vue.prototype.$userdb = new PouchDB('users')
}
