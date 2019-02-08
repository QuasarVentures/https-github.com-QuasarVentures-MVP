export default {
  langLabel: 'en',
  langName: 'English',
  gigs: {
    createEdit: {
      form: {
        address: 'Address',
        industry: 'Industry',
        client: 'Client',
        job: 'Job',
        endDate: 'End date',
        endTime: 'End time',
        payment: 'Payment',
        startDate: 'Start date',
        startTime: 'Start time',
        state: 'State'
      },
      title: {
        create: 'Create a new gig',
        edit: 'Edit a gig'
      },
      save: 'Save',
      update: 'Update'
    },
    list: {
      new: 'New Gig',
      table: {
        industry: 'Industry',
        client: 'Client',
        job: 'Job',
        startDate: 'Start date',
        startTime: 'Start time',
        endDate: 'End date',
        endTime: 'End time',
        address: 'Address',
        state: 'State',
        payment: 'Payment'
      },
      title: 'Gigs'
    }
  },
  layout: {
    menu: {
      gigs: 'GIGs',
      stats: 'Stats',
      users: 'Users'
    }
  },
  login: {
    loginForm: {
      email: 'Email',
      password: 'Password',
      login: {
        label: 'Login'
      }
    },
    registerLink: 'No account yet? Click here to register.'
  },
  register: {
    registerForm: {
      birthday: 'Birthday',
      city: 'City',
      email: 'Email',
      firstName: 'First name',
      lastName: 'Last name',
      maritalStatus: 'Marital status',
      password: 'Password',
      phone: 'Phone number',
      register: {
        label: 'Register'
      },
      role: 'Account type',
      roles: {
        admin: 'Admin',
        manager: 'Manager',
        freelancer: 'Freelancer'
      },
      sex: 'Sex',
      ssn: 'SSN',
      state: 'State',
      streetName: 'Street name',
      streetNumber: 'Street number',
      termsAgreement: 'I agree to the terms and services',
      zip: 'Zip'
    },
    loginLink: 'I already have an account.'
  },
  stats: {
    gigs: 'GIGs',
    workers: 'Workers'
  },
  users: {
    list: {
      table: {
        birthday: 'Birthday',
        city: 'City',
        email: 'Email',
        firstName: 'First name',
        lastName: 'Last name',
        maritalStatus: 'Marital status',
        phone: 'Phone number',
        sex: 'Sex',
        ssn: 'SSN',
        state: 'State',
        streetName: 'Street name',
        streetNumber: 'Street number',
        zip: 'Zip'
      },
      title: 'Workers'
    }
  },
  validations: {
    errors: {
      dateAfter: 'The "{after}" must be after "{before}"',
      email: 'Please type a valid email',
      maxLength: 'Please type at most {count} characters',
      minLength: 'Please type at least {count} characters',
      required: 'This field is required',
      terms: 'You must agree to the terms and service to continue'
    }
  }
}
