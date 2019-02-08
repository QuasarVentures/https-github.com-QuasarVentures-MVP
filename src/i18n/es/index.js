export default {
  langLabel: 'es',
  langName: 'Español',
  gigs: {
    createEdit: {
      form: {
        address: 'Dirección',
        industry: 'Industria',
        client: 'Cliente',
        job: 'Trabajo',
        endDate: 'Fecha de termino',
        endTime: 'Hora de termino',
        payment: 'Pago',
        startDate: 'Fecha de inicio',
        startTime: 'Hora de inicio',
        state: 'Estado'
      },
      title: {
        create: 'Crear un trabajo nuevo',
        edit: 'Editar un trabajo'
      },
      save: 'Guardar',
      update: 'Actualizar'
    },
    industry: {
      '3724': '3724 - Electricians',
      '7380': '7380 - Trucking',
      '5190': '5190 - Electricians'
    },
    list: {
      new: 'Nuevo Trabajo',
      table: {
        assigned: 'Asignado',
        industry: 'Industria',
        client: 'Cliente',
        job: 'Trabajo',
        startDate: 'Fecha de inicio',
        startTime: 'Hora de inicio',
        endDate: 'Fecha de termino',
        endTime: 'Hora de termino',
        address: 'Dirección',
        state: 'Estado',
        payment: 'Pago'
      },
      title: 'Trabajos'
    }
  },
  layout: {
    menu: {
      gigs: 'trabajos',
      stats: 'Estadísticas',
      users: 'Usuarios'
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
      birthday: 'Fecha de nacimiento',
      city: 'Ciudad',
      email: 'Correo electrónico',
      firstName: 'Nombre',
      lastName: 'Apellido',
      maritalStatus: 'Estado civil',
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
      sex: 'Sexo',
      ssn: 'Número de seguro social',
      state: 'Estado',
      streetName: 'Calle',
      streetNumber: 'Número',
      termsAgreement: 'Estoy de acuerdo con los términos y servicios',
      zip: 'Código Postal'
    },
    loginLink: 'Ya tengo cuenta.'
  },
  stats: {
    gigs: 'Trabajos',
    workers: 'Trabajadores'
  },
  users: {
    list: {
      table: {
        birthday: 'Fecha de nacimiento',
        city: 'Ciudad',
        email: 'Correo electrónico',
        firstName: 'Nombre',
        lastName: 'Apellido',
        maritalStatus: 'Estado civil',
        phone: 'Teléfono',
        sex: 'Sexo',
        ssn: 'Número de seguro social',
        state: 'Estado',
        streetName: 'Calle',
        streetNumber: 'Número',
        zip: 'Código postal'
      },
      title: 'Trabajadores'
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
