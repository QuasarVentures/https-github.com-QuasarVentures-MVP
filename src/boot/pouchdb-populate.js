export default async ({ Vue }) => {
  const db = Vue.prototype.$userdb
  try {
    await db.bulkDocs([
      {
        _id: 'admin@email.com',
        role: 'admin',
        email: 'admin@email.com',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        address: '4380 Viking Drive',
        city: 'Worthington',
        zipCode: '43085',
        phone: '740-693-6139'
      },
      {
        _id: 'manager@email.com',
        role: 'manager',
        email: 'manager@email.com',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        address: '2434 Green Gate Lane',
        city: 'Baltimore',
        zipCode: '21202',
        phone: '443-737-2166'
      },
      {
        _id: 'freelancer@email.com',
        role: 'freelancer',
        email: 'freelancer@email.com',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        address: '569 Lynn Ogden Lane',
        city: 'Galveston',
        zipCode: '77550',
        phone: '409-772-7782'
      }
    ])
  } catch (e) {
    console.log(e)
  }
}
