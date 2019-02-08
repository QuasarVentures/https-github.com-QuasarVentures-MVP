export default async ({ Vue }) => {
  const usersdb = Vue.prototype.$usersdb
  try {
    await usersdb.bulkDocs([
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
        state: 'CA',
        phone: '409-772-7782'
      }
    ])
  } catch (e) {
    console.log(e)
  }

  const gigsdb = Vue.prototype.$gigsdb
  try {
    await gigsdb.bulkDocs([
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064800', industry: 'NBA', client: 'Dallas Mavericks', job: 'Point Guard', address: '2500 Victory Avenue, Dallas', state: 'Texas', payment: '$600 000,00', startDate: '2019-01-30', startTime: '06:00', endDate: '2019-01-30', endTime: '10:00' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064801', industry: 'NBA', client: 'Dallas Mavericks', job: 'Center', address: '2500 Victory Avenue, Dallas', state: 'Texas', payment: '$800 000,00', startDate: '2019-01-30', startTime: '06:00', endDate: '2019-01-30', endTime: '10:00' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064802', industry: 'NBA', client: 'Dallas Mavericks', job: 'Shooting Guard', address: '2500 Victory Avenue, Dallas', state: 'Texas', payment: '$290 000,00', startDate: '2019-01-30', startTime: '06:00', endDate: '2019-01-30', endTime: '10:00' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064803', industry: 'NBA', client: 'Dallas Mavericks', job: 'Power Forward', address: '2500 Victory Avenue, Dallas', state: 'Texas', payment: '$1 340 000,00', startDate: '2019-01-30', startTime: '06:00', endDate: '2019-01-30', endTime: '10:00' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064804', industry: 'NBA', client: 'Dallas Mavericks', job: 'Small Forward', address: '2500 Victory Avenue, Dallas', state: 'Texas', payment: '$510 000,00', startDate: '2019-01-30', startTime: '06:00', endDate: '2019-01-30', endTime: '10:00' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064805', industry: 'NBA', client: 'Dallas Mavericks', job: 'Benchwarmer', address: '2500 Victory Avenue, Dallas', state: 'Texas', payment: '$20 000,00', startDate: '2019-01-30', startTime: '06:00', endDate: '2019-01-30', endTime: '10:00' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064806', industry: 'NFL', client: 'Dallas Cowboys', job: 'Wide Receiver', address: '1 AT&T Way, Arlington', state: 'Texas', payment: '$1 500 000,00', startDate: '2018-09-07', startTime: '01:00', endDate: '2018-09-07', endTime: '04:45' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064807', industry: 'NFL', client: 'Dallas Cowboys', job: 'Safety', address: '1 AT&T Way, Arlington', state: 'Texas', payment: '$450 000,00', startDate: '2018-09-07', startTime: '01:00', endDate: '2018-09-07', endTime: '04:45' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064808', industry: 'NFL', client: 'Dallas Cowboys', job: 'Tight End', address: '1 AT&T Way, Arlington', state: 'Texas', payment: '$1 000 000,00', startDate: '2018-09-07', startTime: '01:00', endDate: '2018-09-07', endTime: '04:45' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac064809', industry: 'NFL', client: 'Dallas Cowboys', job: 'Linebacker', address: '1 AT&T Way, Arlington', state: 'Texas', payment: '$900 000,00', startDate: '2018-09-07', startTime: '01:00', endDate: '2018-09-07', endTime: '04:45' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac06480a', industry: 'NFL', client: 'Dallas Cowboys', job: 'Quarterback', address: '1 AT&T Way, Arlington', state: 'Texas', payment: '$530 000,00', startDate: '2018-09-07', startTime: '01:00', endDate: '2018-09-07', endTime: '04:45' },
      { _id: '7c59f9a3-3b3b-49c0-bdf6-5ecaac06480b', industry: 'NFL', client: 'Dallas Cowboys', job: 'Punter', address: '1 AT&T Way, Arlington', state: 'Texas', payment: '$3 000 000,00', startDate: '2018-09-07', startTime: '01:00', endDate: '2018-09-07', endTime: '04:45' }
    ])
  } catch (e) {
    console.log(e)
  }
}
