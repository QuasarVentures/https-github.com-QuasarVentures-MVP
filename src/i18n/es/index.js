export default {
  layout: {
    menu: {
      gigs: 'GIGs',
      profile: 'Perfil'
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
      address: 'Dirección',
      city: 'Ciudad',
      email: 'Correo electrónico',
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
      termsAgreement: 'Estoy de acuerdo con los términos y servicios',
      zipCode: 'Código Postal'
    },
    loginLink: 'Ya tengo cuenta.'
  },
  validations: {
    errors: {
      email: 'Por favor escribe un correo válido',
      maxLength: 'Por favor escribe máximo {count} letras',
      minLength: 'Por favor escribe al menos {count} letras',
      required: 'Este campo es requerido',
      terms: 'Debes estar de acuerdo con los términos y servicio para continuar'
    }
  }
}
