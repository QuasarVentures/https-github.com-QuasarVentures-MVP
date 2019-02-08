<script>
import { isEmail } from 'validator'
import Password from 'src/mixins/password'
import { mapActions } from 'vuex'

export default {
  name: 'page-login',
  mixins: [Password],
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
    ...mapActions('user', ['setUser']),
    async submit () {
      this.submitting = true
      Object.keys(this.validations).forEach((key) => this.$refs[key].validate())
      const isFormValid = Object.keys(this.validations).reduce((valid, key) => valid && !this.$refs[key].hasError, true)
      if (isFormValid) {
        try {
          const user = await this.$usersdb.get(this.loginForm.email)
          if (user) {
            if (await this.verify(this.loginForm.password, user.passwordHash)) {
              this.setUser({
                role: user.role,
                email: user.email,
                address: user.address,
                city: user.city,
                zipCode: user.zipCode,
                phone: user.phone
              })
              this.$router.push({ path: '/dashboard' })
            }
          } else {
            // TODO set error
          }
        } catch (e) {
          console.log(e)
        }
      }
      this.submitting = false
    },
    login (type) {
      this.loginForm.email = `${type.email}@email.com`
      this.loginForm.password = 'password'
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
        stack-label
        :label="$t('login.loginForm.email')"
        :rules="validations.email"
        lazy-rules
      )
      q-input(
        ref="password"
        v-model="loginForm.password"
        :type="isPwd ? 'password' : 'text'"
        stack-label
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
        :loading="submitting"
      )
    q-separator
    q-card-section
      router-link(to="/register") {{$t('login.registerLink')}}
    q-card-section
      q-bar
        q-btn(flat, dense, @click="login('admin')" label="Admin")
        q-btn(flat, dense, @click="login('manager')" label="Manager")
        q-btn(flat, dense, @click="login('freelancer')" label="Admin")

</template>

<style lang="stylus">
.login-form
  min-width 450px
</style>
