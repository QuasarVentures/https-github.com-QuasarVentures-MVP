<script>
import { isAfter } from 'validator'

export default {
  name: 'gigs-create-edit',
  data () {
    return {
      gigForm: {
        _id: null,
        address: '',
        industry: '',
        client: '',
        job: '',
        endDate: null,
        endTime: null,
        payment: '',
        startDate: null,
        startTime: null,
        state: ''
      },
      validations: {
        address: [val => !!val || this.$t('validations.errors.required')],
        industry: [val => !!val || this.$t('validations.errors.required')],
        client: [val => !!val || this.$t('validations.errors.required')],
        job: [val => !!val || this.$t('validations.errors.required')],
        endDate: [
          val => !!val || this.$t('validations.errors.required'),
          val => (isAfter(val, this.gigForm.startDate) || val === this.gigForm.startDate) || this.$t('validations.errors.dateAfter', { before: this.$t('gigs.createEdit.form.startDate'), after: this.$t('gigs.createEdit.form.endDate') })
        ],
        payment: [val => !!val || this.$t('validations.errors.required')],
        startDate: [val => !!val || this.$t('validations.errors.required')],
        state: [val => !!val || this.$t('validations.errors.required')]
      },
      submitting: false
    }
  },
  async mounted () {
    if (this.$route.params.id) {
      const obj = await this.$gigsdb.get(this.$route.params.id)
      if (obj) {
        this.gigForm = obj
      }
    }
  },
  methods: {
    async submit () {
      this.submitting = true
      Object.keys(this.validations).forEach((key) => this.$refs[key].validate())
      const isFormValid = Object.keys(this.validations).reduce((valid, key) => valid && !this.$refs[key].hasError, true)
      if (isFormValid) {
        const { _id, ...gig } = this.gigForm
        let result
        if (!_id) {
          result = await this.$gigsdb.post(gig)
        } else {
          const obj = await this.$gigsdb.get(_id)
          result = await this.$gigsdb.put({
            _id,
            _rev: obj._rev,
            ...gig
          })
        }
        if (result.ok) {
          this.gigForm._id = result.id
          this.gigForm._rev = result.rev
        }
      }
      this.submitting = false
    }
  }
}
</script>

<template lang="pug">
q-page.flex.flex-center.column
  h4 {{$t(`gigs.createEdit.title.${gigForm._id === null ? 'create' : 'edit'}`)}}
  q-card.gig-form
    q-card-section
      q-input(
        ref="industry"
        v-model="gigForm.industry"
        stack-label
        :label="$t('gigs.createEdit.form.industry')"
        autogrow
        :rules="validations.industry"
        lazy-rules
      )
      q-input(
        ref="client"
        v-model="gigForm.client"
        stack-label
        :label="$t('gigs.createEdit.form.client')"
        autogrow
        :rules="validations.client"
        lazy-rules
      )
      q-input(
        ref="job"
        v-model="gigForm.job"
        stack-label
        :label="$t('gigs.createEdit.form.job')"
        autogrow
        :rules="validations.job"
        lazy-rules
      )
      .row.q-col-gutter-sm
        .col-md-6
          q-input(
            ref="startDate"
            v-model="gigForm.startDate"
            stack-label
            :label="$t('gigs.createEdit.form.startDate')"
            type="date"
            :rules="validations.startDate"
            lazy-rules
          )
        .col-md-6
          q-input(
            ref="startTime"
            v-model="gigForm.startTime"
            stack-label
            :label="$t('gigs.createEdit.form.startTime')"
            type="time"
            :rules="validations.startTime"
            lazy-rules
          )
      .row.q-col-gutter-sm
        .col-md-6
          q-input(
          ref="endDate"
          v-model="gigForm.endDate"
          stack-label
          :label="$t('gigs.createEdit.form.endDate')"
          type="date"
          :rules="validations.endDate"
          lazy-rules
          )
        .col-md-6
          q-input(
          ref="endTime"
          v-model="gigForm.endTime"
          stack-label
          :label="$t('gigs.createEdit.form.endTime')"
          type="time"
          :rules="validations.endTime"
          lazy-rules
          )
      q-input(
        ref="address"
        v-model="gigForm.address"
        stack-label
        :label="$t('gigs.createEdit.form.address')"
        autogrow
        :rules="validations.address"
        lazy-rules
      )
      q-select(
        ref="state"
        v-model="gigForm.state",
        stack-label
        :label="$t('gigs.createEdit.form.state')"
        :options="[{value: 'California', label: 'California'}, { value: 'Texas', label: 'Texas'}]"
        emit-value
        :rules="validations.state"
        lazy-rules
      )
      q-input(
        ref="payment"
        v-model="gigForm.payment"
        stack-label
        :label="$t('gigs.createEdit.form.payment')"
        :rules="validations.payment"
        lazy-rules
      )
    q-card-actions
      q-btn.full-width(
        color="primary"
        :label="$t(`gigs.createEdit.${gigForm._id === null ? 'save' : 'update'}`)"
        @click.native="submit"
        :loading="submitting"
      )
</template>

<style lang="stylus">
.gig-form
  min-width 450px
</style>
