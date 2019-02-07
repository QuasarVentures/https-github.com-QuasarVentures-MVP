<script>
export default {
  name: 'gigs-create-edit',
  data () {
    return {
      gigForm: {
        _id: null,
        address: '',
        code: '',
        endDate: null,
        payment: '',
        startDate: null,
        state: ''
      },
      validations: {
        address: [val => !!val || this.$t('validations.errors.required')],
        code: [val => !!val || this.$t('validations.errors.required')],
        endDate: [val => !!val || this.$t('validations.errors.required')],
        payment: [val => !!val || this.$t('validations.errors.required')],
        startDate: [val => !!val || this.$t('validations.errors.required')],
        state: [val => !!val || this.$t('validations.errors.required')]
      },
      submitting: false
    }
  },
  methods: {
    async mounted () {
      if (this.$router.params.id) {
        const obj = await this.$gigsdb.get(this.$router.params.id)
        if (obj) {
          console.log(obj)
          this.gigForm = obj
        }
      }
    },
    async submit () {
      this.submitting = true
      Object.keys(this.validations).forEach((key) => this.$refs[key].validate())
      const isFormValid = Object.keys(this.validations).reduce((valid, key) => valid && !this.$refs[key].hasError, true)
      if (isFormValid) {
        const { _id, ...gig } = this.gigForm
        if (!_id) {
          await this.$gigsdb.post(gig)
        } else {
          const obj = await this.$gigsdb.get(_id)
          await this.$gigsdb.put({
            _id,
            _rev: obj._rev,
            ...gig
          })
        }
      }
      this.submitting = false
    }
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center.column
  h4 {{$t('gigs.createEdit.title.create')}}
  q-card.gig-form
    q-card-section
      q-select(
        ref="code"
        v-model="gigForm.code",
        :label="$t('gigs.createEdit.form.code')"
        :options="[{value: '0110-Wheat', label: '0110 Wheat'}]"
        :rules="validations.code"
        lazy-rules
      )
      .row.q-col-gutter-sm
        .col-md-6
          q-input(
            ref="startDate"
            v-model="gigForm.startDate"
            :label="$t('gigs.createEdit.form.startDate')"
            type="date"
            :rules="validations.address"
            lazy-rules
          )
        .col-md-6
          q-input(
            ref="endDate"
            v-model="gigForm.endDate"
            :label="$t('gigs.createEdit.form.endDate')"
            type="date"
            :rules="validations.address"
            lazy-rules
          )
      q-input(
        ref="address"
        v-model="gigForm.address"
        :label="$t('gigs.createEdit.form.address')"
        autogrow
        :rules="validations.address"
        lazy-rules
      )
      q-select(
        ref="state"
        v-model="gigForm.state",
        :label="$t('gigs.createEdit.form.state')"
        :options="[{value: 'CA', label: 'California'}, { value: 'TX', label: 'Texas'}]"
        :rules="validations.state"
        lazy-rules
      )
      q-input(
        ref="payment"
        v-model="gigForm.payment"
        :label="$t('gigs.createEdit.form.payment')"
        :rules="validations.payment"
        lazy-rules
      )
    q-card-actions
      q-btn.full-width(
        color="primary"
        :label="$t('gigs.createEdit.save')"
        @click.native="submit"
        :loading="submitting"
      )
</template>

<style lang="stylus">
.gig-form
  min-width 450px
</style>
