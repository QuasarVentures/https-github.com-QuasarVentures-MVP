export default {
  gigs: {
    createEdit: {
      form: {
        address: 'Address',
        code: 'Code',
        endDate: 'End date',
        payment: 'Payment',
        startDate: 'Start date',
        state: 'State'
      },
      title: {
        create: 'Create a new gig',
        edit: 'Edit a gig'
      },
      save: 'Save',
      update: 'Update'
    }
  },
  layout: {
    menu: {
      gigs: 'GIGs',
      profile: 'Profile'
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
      address: 'Address',
      city: 'City',
      email: 'Email',
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
      termsAgreement: 'I agree to the terms and services',
      zipCode: 'Zip code'
    },
    loginLink: 'I already have an account.'
  },
  validations: {
    errors: {
      email: 'Please type a valid email',
      maxLength: 'Please type at most {count} characters',
      minLength: 'Please type at least {count} characters',
      required: 'This field is required',
      terms: 'You must agree to the terms and service to continue'
    }
  }
}
