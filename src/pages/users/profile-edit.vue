<script>
import { isEmail } from 'validator'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'page-profile-edit',
  data () {
    return {
      registerForm: {
        email: null,
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
        phone: null
      },
      validations: {
        email: [
          val => !!val || this.$t('validations.errors.required'),
          val => isEmail(val) || this.$t('validations.errors.email')
          // TODO database existence validation
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
  mounted () {
    this.registerForm = this.user
  },
  methods: {
    ...mapActions('user', ['setUser']),
    async submit () {
      this.submitting = true
      Object.keys(this.validations).forEach((key) => this.$refs[key].validate())
      const isFormValid = Object.keys(this.validations).reduce((valid, key) => valid && !this.$refs[key].hasError, true)
      if (isFormValid) {
        const result = await this.$usersdb.put({
          _id: this.user._id,
          _rev: this.user._rev,
          ...this.registerForm
        })
        this.setUser({
          ...this.registerForm,
          _id: this.user._id,
          _rev: result.rev
        })
        this.$router.push({ path: '/profile' })
      }
      this.submitting = false
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
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
        stack-label
        :rules="validations.email"
        lazy-rules
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
            map-options
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
            map-options
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
    q-card-actions
      q-btn.full-width(
        color="primary"
        :label="$t('profile.update')"
        @click.native="submit"
        :loading="submitting"
      )
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
