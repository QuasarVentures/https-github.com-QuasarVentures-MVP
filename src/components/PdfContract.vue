<template lang="pug">
  iframe.pdf-contract(:src="pdfSrc" width="100%" height="99%" frameBorder="0")
</template>

<script>
import PDF from 'jspdf'
import { uid, date } from 'quasar'
import { mapGetters } from 'vuex'

export default {
  name: 'PdfContract',
  props: ['data'],
  data () {
    return {
      pdfSrc: ''
    }
  },
  computed: {
    ...mapGetters('user', ['user'])
  },
  methods: {
    createPDF () {
      let pdfName = 'ContractGenerated'
      let doc = new PDF()
      let logo = doc.loadImageFile('statics/gigGuard.png', true)
      let logo64 = 'data:image/png;base64,' + btoa(logo)
      let data = this.data
      let width = 100
      doc.setFontSize(8)
      doc.setFontStyle('bold')
      doc.text(uid(), 100, 5)
      doc.setFontSize(12)
      doc.setFontStyle('bold')
      doc.text(this.$t('contract.independent'), 10, 10)
      doc.setFontStyle('normal')
      doc.text(this.$t('contract.driverEnrollment'), 10, 10)
      doc.addImage(logo64, 'PNG', 170, 5, 20, 20)
      doc.setFontStyle('bold')
      doc.text(this.$t('contract.insuredPerson'), 10, 40)
      doc.setFontStyle('normal')
      let base = 50
      doc.text(this.user.lastName + '\t\t' + this.user.firstName, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text(this.$t('contract.completeName'), 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(this.user.streetNumber + ' ' + this.user.streetName, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text(this.$t('contract.address'), 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(this.user.city + '\t' + this.user.state + '\t' + this.user.zip, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text(this.$t('contract.completeLoc'), 10, base + 5)
      doc.setFontStyle('bold')
      base += 15
      doc.text(this.$t('contract.phone'), 10, base)
      doc.line(35, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(this.user.phone, 35, base)
      doc.setFontStyle('bold')
      base += 10
      doc.text(this.$t('contract.ssn'), 10, base)
      doc.line(47, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(this.user.ssn, 47, base)
      doc.setFontStyle('bold')
      base += 10
      doc.text(this.$t('contract.birthday'), 10, base)
      doc.line(68, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(this.user.birthday, 68, base)
      doc.setFontStyle('bold')
      base += 10
      doc.text(this.$t('contract.sex'), 10, base)
      doc.rect(20, base - 4, 5, 5)
      doc.setFontStyle('normal')
      doc.text(this.$t('contract.F'), 26, base)
      doc.rect(30, base - 4, 5, 5)
      doc.text(this.$t('contract.M'), 36, base)
      doc.setFontStyle('bold')
      doc.text(this.$t('contract.marital'), 40, base)
      doc.line(70, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(this.user.maritalStatus, 70, base)
      let margin = 21
      if (this.user.sex === 'M') {
        margin = 31
      }
      doc.text('X', margin, base)
      base += 15
      doc.setFontStyle('bold')
      doc.text(this.$t('contract.beneficiary'), 10, base)
      base += 10
      doc.setFontStyle('normal')
      doc.text(data.beneficiary.lastName + '\t\t' + data.beneficiary.firstName + '\t\t' + data.beneficiary.middleInitial, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text(this.$t('contract.completeName'), 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(data.beneficiary.street, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text(this.$t('contract.address'), 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(data.beneficiary.city + '\t' + data.beneficiary.state + '\t' + data.beneficiary.zip, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text(this.$t('contract.completeLoc'), 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(data.beneficiary.relationship, 10, base)
      doc.text(this.$t('contract.orPay'), 45, base)
      doc.line(10, base + 1, 40, base + 1)
      doc.setFontStyle('italic')
      doc.text(this.$t('contract.relationship'), 10, base + 5)
      doc.setFontStyle('bold')
      base += 15
      doc.text(this.$t('contract.effectiveDate'), 10, base)
      doc.line(60, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      let timeStamp = Date.now()
      doc.text(date.formatDate(timeStamp, 'DD-MMM-YYYY'), 120, base)
      doc.setFontStyle('bold')
      timeStamp = date.addToDate(timeStamp, { days: 5 })
      doc.text(date.formatDate(timeStamp, 'DD-MMM-YYYY'), 78, base)
      base += 5
      doc.text(this.$t('contract.desiredDate'), 10, base)
      doc.line(78, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      timeStamp = date.addToDate(timeStamp, { days: 1, month: 6 })
      doc.text(date.formatDate(timeStamp, 'DD-MMM-YYYY'), 78, base)
      doc.setFontStyle('bold')
      base += 5
      doc.text(this.$t('contract.cn'), 10, base)
      doc.line(53, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(uid().split('-')[0], 53, base)
      doc.setFontStyle('bold')
      base += 5
      doc.text(this.$t('contract.leasedTo'), 10, base)
      doc.line(35, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.leasedTo, 35, base)
      doc.setFontStyle('bold')
      base += 5
      doc.text(this.$t('contract.locationNumber'), 10, base)
      doc.line(48, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.locationNumber, 48, base)
      base += 20
      doc.text(this.$t('contract.quasarInfo'), 10, base)
      let leftMargin = 105
      doc.setFontStyle('bold')
      doc.text(this.$t('contract.acceptance'), 140, 40)
      base = 50
      doc.setFontSize(9)
      doc.setFontStyle('normal')
      doc.text(this.$t('contract.acceptanceText'), leftMargin, base)
      base += 150
      doc.setFontSize(12)
      doc.setFontStyle('bold')
      doc.text(this.$t('contract.acceptanceSign'), leftMargin, base)
      base += 20
      doc.line(leftMargin + 20, base + 1, leftMargin + width, base + 1)
      base += 5
      doc.line(leftMargin + 20, base + 1, leftMargin + width, base + 1)
      doc.setFontSize(10)
      doc.setFontStyle('normal')
      doc.text(this.$t('contract.pageOne'), leftMargin + 80, 290)
      doc.addPage()
      doc.setFontSize(10)
      doc.setFontStyle('normal')
      doc.text(this.$t('contract.form'), 10, 10)
      doc.setFontStyle('bold')
      doc.setFontSize(14)
      doc.text(this.$t('contract.terms'), 10, 20)
      doc.setFontSize(12)
      doc.text(this.$t('contract.read'), 10, 27)
      base = 40
      doc.setFontSize(9)
      doc.setFontStyle('normal')
      doc.text(this.$t('contract.understood'), 10, base)
      base += 10
      doc.text(this.$t('contract.clausesOne'), 10, base)
      doc.text(this.$t('contract.clausesTwo'), leftMargin, base)
      doc.text(this.$t('contract.quasarInfo'), leftMargin, 220)
      doc.setFontSize(10)
      doc.setFontStyle('normal')
      doc.text(this.$t('contract.pageTwo'), leftMargin + 80, 290)
      this.pdfSrc = doc.output('datauristring', { filename: pdfName })
    }
  },
  watch: {
    user: {
      handler (val, oldVal) {
        this.data.principal.firstName = val.firstName
        alert('change')
        this.createPDF()
      }
    },
    immediate: true
  },
  mounted () {
    this.createPDF()
  }
}
</script>

<style lang="stylus" scoped>
iframe.pdf-contract
  border
</style>
