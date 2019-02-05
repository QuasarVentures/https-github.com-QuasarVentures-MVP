<script>
import { isEmail } from 'validator'
export default {
  name: 'page-login',
  data () {
    return {
      loginForm: {
        email: null,
        password: null
      },
      validations: {
        email: [
          val => !!val || this.$t('validations.errors.required'),
          val => isEmail(val) || this.$t('validations.errors.email')
        ],
        password: [ val => !!val || this.$t('validations.errors.required') ]
      },
      isPwd: true,
      submitting: false
    }
  },
  methods: {
    submit () {
      this.submitting = true
      Object.keys(this.validations).forEach((key) => this.$refs[key].validate())
      const isFormValid = Object.keys(this.validations).reduce((valid, key) => valid && !this.$refs[key].hasError, true)
      if (isFormValid) {
        // TODO login with pouchDB
      }
      this.submitting = false
    }
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center
  q-card.login-form
    q-card-section
      q-input(
        ref="email"
        v-model="loginForm.email"
        type="email"
        :label="$t('login.loginForm.email')"
        :rules="validations.email"
        lazy-rules
      )
      q-input(
        ref="password"
        v-model="loginForm.password"
        :type="isPwd ? 'password' : 'text'"
        :label="$t('login.loginForm.password')"
        :rules="validations.password"
        lazy-rules
      )
        q-icon(
          slot="append"
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        )
    q-card-actions
      q-btn.full-width(
        color="primary"
        :label="$t('login.loginForm.login.label')"
        @click.native="submit"
      )
    q-separator
    q-card-section
      router-link(to="/register") {{$t('login.registerLink')}}
</template>

<style lang="stylus">
.login-form
  min-width 450px
</style>
