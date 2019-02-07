<template lang="pug">
  iframe.pdf-contract(:src="pdfSrc" width="100%" height="100%")
</template>

<script>
import PDF from 'jspdf'

export default {
  name: 'PdfContract',
  props: ['data'],
  data () {
    return {
      pdfSrc: ''
    }
  },
  methods: {
    createPDF () {
      let pdfName = 'ContractGenerated';
      let doc = new PDF()
      let logo = doc.loadImageFile('statics/quasar-logo.png', true)
      let logo64 = 'data:image/jpeg;base64,' + btoa(logo)
      let data = this.data
      doc.setFontSize(12)
      doc.setFontStyle('bold')
      doc.text('INDEPENDENT CONTRACTOR', 10, 10)
      doc.setFontStyle('normal')
      doc.text('\nDRIVER ENROLLMENT FORM\nFOR OCCUPATIONAL ACCIDENT\nCOVERAGE', 10, 10)
      doc.addImage(logo64, 'PNG', 170, 5, 20, 20)
      doc.text('Insured Person Information:', 10, 40)
      doc.text(data.principal.lastName + '    ' + data.principal.firstName + '     ' + data.principal.middleInitial, 10, 50)
      doc.setFontStyle('italic')
      doc.text('Last Name           First Name              M.I.', 10, 55)
      this.pdfSrc = doc.output('datauristring', { filename: pdfName })
    }
  },
  mounted () {
    this.createPDF()
  }
}
</script>

<style lang="stylus" scoped>
iframe.pdf-contract
  border 1px green solid
</style>
