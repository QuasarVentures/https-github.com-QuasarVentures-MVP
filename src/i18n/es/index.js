export default {
  langLabel: 'es',
  langName: 'Español',
  gigs: {
    createEdit: {
      form: {
        address: 'Dirección',
        code: 'Código',
        endDate: 'Fecha de termino',
        payment: 'Pago',
        startDate: 'Fecha de inicio',
        state: 'Estado'
      },
      title: {
        create: 'Crear un gig nuevo',
        edit: 'Editar un gig'
      },
      save: 'Guardar',
      update: 'Actualizar'
    },
    list: {
      new: 'Nuevo Gig',
      table: {
        code: 'Código',
        startDate: 'Fecha de inicio',
        endDate: 'Fecha de termino',
        address: 'Dirección',
        state: 'Estado',
        payment: 'Pago'
      },
      title: 'Gigs'
    }
  },
  layout: {
    menu: {
      gigs: 'GIGs',
      stats: 'Estadísticas',
      users: 'TODO'
    }
  },
  login: {
    loginForm: {
      email: 'Correo electrónico',
      password: 'Contraseña',
      login: {
        label: 'Iniciar sesión'
      }
    },
    registerLink: '¿Aún no tienes cuenta? Registrate.'
  },
  register: {
    registerForm: {
      birthday: 'TODO',
      city: 'Ciudad',
      email: 'Correo electrónico',
      firstName: 'TODO',
      lastName: 'TODO',
      maritalStatus: 'TODO',
      password: 'Contraseña',
      phone: 'Teléfono',
      register: {
        label: 'Registrar'
      },
      role: 'Tipo de cuenta',
      roles: {
        admin: 'Administrador',
        manager: 'Gerente',
        freelancer: 'Trabajador independiente'
      },
      sex: 'TODO',
      ssn: 'TODO',
      state: 'TODO',
      streetName: 'TODO',
      streetNumber: 'TODO',
      termsAgreement: 'Estoy de acuerdo con los términos y servicios',
      zip: 'Código Postal'
    },
    loginLink: 'Ya tengo cuenta.'
  },
  stats: {
    gigs: 'GIGs',
    workers: 'Trabajadores'
  },
  users: {
    list: {
      table: {
        birthday: 'TODO',
        city: 'TODO',
        email: 'TODO',
        firstName: 'TODO',
        lastName: 'TODO',
        maritalStatus: 'TODO',
        phone: 'TODO',
        sex: 'TODO',
        ssn: 'SSN',
        state: 'TODO',
        streetName: 'TODO',
        streetNumber: 'TODO',
        zip: 'TODO'
      },
      title: 'TODO'
    }
  },
  validations: {
    errors: {
      dateAfter: 'La fecha "{after}" debe ser posterior a "{before}"',
      email: 'Por favor escribe un correo válido',
      maxLength: 'Por favor escribe máximo {count} letras',
      minLength: 'Por favor escribe al menos {count} letras',
      required: 'Este campo es requerido',
      terms: 'Debes estar de acuerdo con los términos y servicio para continuar'
    }
  }
}
