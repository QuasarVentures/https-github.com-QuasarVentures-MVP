<script>
import { isEmail, isLength } from 'validator'
export default {
  name: 'page-register',
  data () {
    return {
      registerForm: {
        email: null,
        password: null,
        address: null,
        city: null,
        zipCode: null,
        phone: null,
        termsAgreement: false
      },
      validations: {
        email: [
          val => !!val || this.$t('validations.errors.required'),
          val => isEmail(val) || this.$t('validations.errors.email')
        ],
        password: [
          val => !!val || this.$t('validations.errors.required'),
          val => isLength(val, { min: 8 }) || this.$t('validations.errors.minLength', { count: 8 }),
          val => isLength(val, { max: 16 }) || this.$t('validations.errors.maxLength', { count: 16 })
        ],
        address: [val => !!val || this.$t('validations.errors.required')],
        city: [val => !!val || this.$t('validations.errors.required')],
        zipCode: [val => !!val || this.$t('validations.errors.required')],
        phone: [val => !!val || this.$t('validations.errors.required')]
        // termsAgreement: [val => val || this.$t('validations.errors.terms')]
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
        // TODO save to pouchBD
      }
      this.submitting = false
    }
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center
  q-card.register-form
    q-card-section
      q-input(
        ref="email"
        v-model="registerForm.email"
        type="email"
        :label="$t('register.registerForm.email')"
        :rules="validations.email"
        lazy-rules
      )
      q-input(
        ref="password"
        v-model="registerForm.password"
        :type="isPwd ? 'password' : 'text'"
        :label="$t('register.registerForm.password')"
        :rules="validations.password"
        lazy-rules
      )
        q-icon(
          slot="append"
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        )
      q-input(
        ref="address"
        v-model="registerForm.address"
        type="text"
        :label="$t('register.registerForm.address')"
        :rules="validations.address"
        lazy-rules
      )
      .row
        .col-md-6
          q-input(
            ref="city"
            v-model="registerForm.city"
            type="text"
            :label="$t('register.registerForm.city')"
            :rules="validations.city"
            lazy-rules
          )
        .col-md-6
          q-input(
            ref="zipCode"
            v-model="registerForm.zipCode"
            type="text"
            :label="$t('register.registerForm.zipCode')"
            :rules="validations.zipCode"
            lazy-rules
          )
      q-input(
        ref="phone"
        v-model="registerForm.phone"
        type="text"
        :label="$t('register.registerForm.phone')"
        :rules="validations.phone"
        lazy-rules
      )
      q-checkbox.agreement(
        ref="termsAgreement"
        v-model="registerForm.termsAgreement"
        :label="$t('register.registerForm.termsAgreement')"
        :rules="validations.termsAgreement"
      )
    q-card-actions
      q-btn.full-width(
        color="primary"
        :label="$t('register.registerForm.register.label')"
        @click.native="submit"
        :loading="submitting"
      )
    q-separator
    q-card-section
      router-link(to="/login") {{$t('register.loginLink')}}
</template>

<style lang="stylus">
.register-form
  min-width 450px
  .agreement
    margin-left -13px
</style>
