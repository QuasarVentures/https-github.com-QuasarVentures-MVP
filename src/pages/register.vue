<script>
import Password from 'src/mixins/password'
import { isEmail, isLength } from 'validator'
import { mapActions } from 'vuex'

export default {
  name: 'page-register',
  mixins: [Password],
  data () {
    return {
      roleOptions: [
        { value: 'admin', label: this.$t('register.registerForm.roles.admin') },
        { value: 'manager', label: this.$t('register.registerForm.roles.manager') },
        { value: 'freelancer', label: this.$t('register.registerForm.roles.freelancer') }
      ],
      registerForm: {
        role: null,
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        birthday: null,
        sex: null,
        maritalStatus: null,
        streetName: null,
        streetNumber: null,
        city: null,
        zip: null,
        state: null,
        phone: null,
        termsAgreement: false
      },
      validations: {
        role: [val => !!val || this.$t('validations.errors.required')],
        email: [
          val => !!val || this.$t('validations.errors.required'),
          val => isEmail(val) || this.$t('validations.errors.email')
          // TODO database existence validation
        ],
        password: [
          val => !!val || this.$t('validations.errors.required'),
          val => isLength(val, { min: 8 }) || this.$t('validations.errors.minLength', { count: 8 }),
          val => isLength(val, { max: 16 }) || this.$t('validations.errors.maxLength', { count: 16 })
        ],
        firstName: [val => !!val || this.$t('validations.errors.required')],
        lastName: [val => !!val || this.$t('validations.errors.required')],
        birthday: [val => !!val || this.$t('validations.errors.required')],
        sex: [val => !!val || this.$t('validations.errors.required')],
        maritalStatus: [val => !!val || this.$t('validations.errors.required')],
        streetName: [val => !!val || this.$t('validations.errors.required')],
        streetNumber: [val => !!val || this.$t('validations.errors.required')],
        city: [val => !!val || this.$t('validations.errors.required')],
        zip: [val => !!val || this.$t('validations.errors.required')],
        state: [val => !!val || this.$t('validations.errors.required')],
        phone: [val => !!val || this.$t('validations.errors.required')]
        // termsAgreement: [val => val || this.$t('validations.errors.terms')]
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
        const { password, termsAgreement, ...user } = this.registerForm
        this.$usersdb.put({
          _id: user.email,
          passwordHash: await this.encrypt(password),
          ...user
        })
        this.setUser(user)
        this.$router.push({ path: '/dashboard' })
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
      q-select(
        ref="role"
        v-model="registerForm.role",
        :options="roleOptions"
        :label="$t('register.registerForm.role')"
        stack-label
        :rules="validations.role"
        emit-value
        lazy-rules
      )
      q-input(
        ref="email"
        v-model="registerForm.email"
        type="email"
        :label="$t('register.registerForm.email')"
        stack-label
        :rules="validations.email"
        lazy-rules
      )
      q-input(
        ref="password"
        v-model="registerForm.password"
        :type="isPwd ? 'password' : 'text'"
        :label="$t('register.registerForm.password')"
        stack-label
        :rules="validations.password"
        lazy-rules
      )
        q-icon(
          slot="append"
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        )
      .row
        .col-md-6.col-xs-6
          q-input(
            ref="firstName"
            v-model="registerForm.firstName"
            type="text"
            :label="$t('register.registerForm.firstName')"
            stack-label
            :rules="validations.firstName"
            lazy-rules
          )
        .col-md-6.col-xs-6
          q-input(
            ref="lastName"
            v-model="registerForm.lastName"
            type="text"
            :label="$t('register.registerForm.lastName')"
            stack-label
            :rules="validations.lastName"
            lazy-rules
          )
      .row
        .col-md-6.col-xs-6
          q-input(
            ref="birthday"
            v-model="registerForm.birthday"
            type="date"
            :label="$t('register.registerForm.birthday')"
            stack-label
            :rules="validations.birthday"
            lazy-rules
          )
        .col-md-6.col-xs-6
          q-select(
            ref="sex"
            v-model="registerForm.sex",
            :label="$t('register.registerForm.sex')"
            stack-label
            :options="[{value: 'M', label: 'Male'}, { value: 'F', label: 'Female'}]"
            emit-value
            :rules="validations.sex"
            lazy-rules
          )
      .row
        .col-md-6.col-xs-6
          q-select(
            ref="maritalStatus"
            v-model="registerForm.maritalStatus",
            :label="$t('register.registerForm.maritalStatus')"
            stack-label
            :options="[{value: 'M', label: 'Married'}, { value: 'S', label: 'Single'}]"
            emit-value
            :rules="validations.maritalStatus"
            lazy-rules
          )
        .col-md-6.col-xs-6
          q-input(
            ref="phone"
            v-model="registerForm.phone"
            type="text"
            :label="$t('register.registerForm.phone')"
            stack-label
            :rules="validations.phone"
            lazy-rules
          )
      .row
        .col-md-3.col-xs-5
          q-input(
            ref="streetNumber"
            v-model="registerForm.streetNumber"
            type="text"
            :label="$t('register.registerForm.streetNumber')"
            stack-label
            :rules="validations.streetNumber"
            lazy-rules
          )
        .col-md-9.col-xs-7
          q-input(
          ref="streetName"
          v-model="registerForm.streetName"
          type="text"
          :label="$t('register.registerForm.streetName')"
          stack-label
          :rules="validations.streetName"
          lazy-rules
        )
      .row
        .col-md-6.col-xs-6
          q-input(
            ref="city"
            v-model="registerForm.city"
            type="text"
            :label="$t('register.registerForm.city')"
            stack-label
            :rules="validations.city"
            lazy-rules
          )
        .col-md-6.col-xs-6
          q-input(
            ref="zip"
            v-model="registerForm.zip"
            type="text"
            :label="$t('register.registerForm.zip')"
            stack-label
            :rules="validations.zip"
            lazy-rules
          )
      q-select(
        ref="state"
        v-model="registerForm.state",
        :label="$t('register.registerForm.state')"
        stack-label
        :options="[{value: 'California', label: 'California'}, { value: 'Texas', label: 'Texas'}]"
        emit-value
        :rules="validations.state"
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
@import '~quasar-variables'
.register-form
  min-width 450px
  @media (max-width $breakpoint-sm-max)
    min-width 300px
  .agreement
    margin-left -13px
</style>
