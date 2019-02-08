export default async ({ Vue }) => {
  const usersdb = Vue.prototype.$usersdb
  try {
    await usersdb.bulkDocs([
      {
        _id: 'admin@email.com',
        role: 'admin',
        email: 'admin@email.com',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3' // password
      },
      {
        _id: 'manager@email.com',
        role: 'manager',
        email: 'manager@email.com',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3' // password
      },
      {
        _id: 'freelancer@email.com',
        role: 'freelancer',
        email: 'freelancer@email.com',
        birthday: '1991-05-02',
        firstName: 'freelancer',
        lastName: 'freelancer',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '569',
        streetName: 'Lynn Ogden Lane',
        city: 'Galveston',
        state: 'California',
        zip: '77550',
        ssn: '727-999-0973',
        sex: 'M',
        martialStatus: 'M',
        phone: '409-772-7782'
      },
      {
        _id: 'dorance.armstrong@email.com',
        role: 'freelancer',
        email: 'dorance.armstrong@email.com',
        birthday: '1991-05-02',
        firstName: 'Dorance',
        lastName: 'Armstrong',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '4883',
        streetName: 'Main St.',
        city: 'Dallas',
        state: 'Texas',
        zip: '45783',
        ssn: '563-12-3425',
        sex: 'M',
        martialStatus: 'S',
        phone: '727-999-0974'
      },
      {
        _id: 'austin.tavon@email.com',
        role: 'freelancer',
        email: 'austin.tavon@email.com',
        birthday: '1991-05-02',
        firstName: 'Tavon',
        lastName: 'Austin',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '3255',
        streetName: 'Pat St.',
        city: 'Dallas',
        state: 'Texas',
        zip: '45332',
        ssn: '503-21-8932',
        sex: 'M',
        martialStatus: 'M',
        phone: '555-234-2356'
      },
      {
        _id: 'awuzie.chidobe@email.com',
        role: 'freelancer',
        email: 'awuzie.chidobe@email.com',
        birthday: '1991-05-02',
        firstName: 'Chidobe',
        lastName: 'Awuzie',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '432',
        streetName: 'Tampa rd.',
        city: 'Dallas',
        state: 'Texas',
        zip: '45678',
        ssn: '503-45-2255',
        sex: 'M',
        martialStatus: 'S',
        phone: '111-453-0987'
      },
      {
        _id: 'beasley.cole@email.com',
        role: 'freelancer',
        email: 'beasley.cole@email.com',
        birthday: '1991-05-02',
        firstName: 'Cole',
        lastName: 'Beasley',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '5467',
        streetName: 'Dallas St. ',
        city: 'Dallas',
        state: 'Texas',
        zip: '45345',
        ssn: '334-44-3465',
        sex: 'M',
        martialStatus: 'M',
        phone: '866-567-9807'
      },
      {
        _id: 'anthony.brown@email.com',
        role: 'freelancer',
        email: 'anthony.brown@email.com',
        birthday: '1991-05-02',
        firstName: 'Brown',
        lastName: 'Anthony',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '5032',
        streetName: 'S.R. 52',
        city: 'Dallas',
        state: 'Texas',
        zip: '45332',
        ssn: '589-32-5482',
        sex: 'M',
        martialStatus: 'M',
        phone: '555-754-9802'
      },
      {
        _id: 'noah.brown@email.com',
        role: 'freelancer',
        email: 'noah.brown@email.com',
        birthday: '1991-05-02',
        firstName: 'Noah',
        lastName: 'Brown',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '678',
        streetName: 'Parkwood St.',
        city: 'Dallas',
        state: 'Texas',
        zip: '45321',
        ssn: '654-43-0990',
        sex: 'M',
        martialStatus: 'M',
        phone: '532-099-0993'
      },
      {
        _id: 'taco.charlton@email.com',
        role: 'freelancer',
        email: 'taco.charlton@email.com',
        birthday: '1991-05-02',
        firstName: 'Taco',
        lastName: 'Charlton',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '521',
        streetName: 'Homewood St.',
        city: 'Dallas',
        state: 'Texas',
        zip: '45337',
        ssn: '599-43-9119',
        sex: 'M',
        martialStatus: 'S',
        phone: '423-666-9322'
      },
      {
        _id: 'lael.collins@email.com',
        role: 'freelancer',
        email: 'lael.collins@email.com',
        birthday: '1991-05-02',
        firstName: 'La\'el',
        lastName: 'Collins',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '6733',
        streetName: 'Stadium Dr.',
        city: 'Dallas',
        state: 'Texas',
        zip: '45665',
        ssn: '644-22-0900',
        sex: 'M',
        martialStatus: 'S',
        phone: '432-909-1121'
      },
      {
        _id: 'maliek.collins@email.com',
        role: 'freelancer',
        email: 'maliek.collins@email.com',
        birthday: '1991-05-02',
        firstName: 'Maliek',
        lastName: 'Collins',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '549',
        streetName: 'Bush Blvd.',
        city: 'Dallas',
        state: 'Texas',
        zip: '46656',
        ssn: '813-99-0923',
        sex: 'M',
        martialStatus: 'M',
        phone: '872-124-5543'
      },
      {
        _id: 'amari.cooper@email.com',
        role: 'freelancer',
        email: 'amari.cooper@email.com',
        birthday: '1991-05-02',
        firstName: 'Amari',
        lastName: 'Cooper',
        passwordHash: 'djAxsSAI+OjEhqLIcpgwDEAxQw9CQBusvhu6fgqm4PlFa5PYZDUVghfAKTLknhGtIByOvKk3', // password
        streetNumber: '541',
        streetName: 'Hillsborough',
        city: 'Dallas',
        state: 'Texas',
        zip: '44321',
        ssn: '782-44-3212',
        sex: 'M',
        martialStatus: 'M',
        phone: '654-987-3422'
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
