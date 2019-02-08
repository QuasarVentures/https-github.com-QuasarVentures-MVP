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
      let pdfName = 'ContractGenerated'
      let doc = new PDF()
      let logo = doc.loadImageFile('statics/quasar-logo.png', true)
      let logo64 = 'data:image/png;base64,' + btoa(logo)
      let data = this.data
      let width = 100
      doc.setFontSize(12)
      doc.setFontStyle('bold')
      doc.text('INDEPENDENT CONTRACTOR', 10, 10)
      doc.setFontStyle('normal')
      doc.text('\nDRIVER ENROLLMENT FORM\nFOR OCCUPATIONAL ACCIDENT\nCOVERAGE', 10, 10)
      doc.addImage(logo64, 'PNG', 170, 5, 20, 20)
      doc.setFontStyle('bold')
      doc.text('Insured Person Information:', 10, 40)
      doc.setFontStyle('normal')
      let base = 50
      doc.text(data.principal.lastName + '\t\t' + data.principal.firstName + '\t\t' + data.principal.middleInitial, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text('Last Name\t\tFirst Name\tM.I.', 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(data.principal.street, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text('Street Address', 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(data.principal.city + '\t' + data.principal.state + '\t' + data.principal.zip, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text('City\t\tState\t\tZip', 10, base + 5)
      doc.setFontStyle('bold')
      base += 15
      doc.text('Telephone: ', 10, base)
      doc.line(35, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.principal.telephone, 35, base)
      doc.setFontStyle('bold')
      base += 10
      doc.text('Social Security #: ', 10, base)
      doc.line(47, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.principal.ssn, 47, base)
      doc.setFontStyle('bold')
      base += 10
      doc.text('Date of Birth (MM/DD/YYYY): ', 10, base)
      doc.line(68, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.principal.birthday, 68, base)
      doc.setFontStyle('bold')
      base += 10
      doc.text('Sex: ', 10, base)
      doc.rect(20, base - 4, 5, 5)
      doc.setFontStyle('normal')
      doc.text('F', 26, base)
      doc.rect(30, base - 4, 5, 5)
      doc.text('M', 36, base)
      doc.setFontStyle('bold')
      doc.text('Marital Status: ', 40, base)
      doc.line(70, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.principal.marital, 70, base)
      let margin = 21
      if (data.principal.sex === 'M') {
        margin = 31
      }
      doc.text('X', margin, base)
      base += 15
      doc.setFontStyle('bold')
      doc.text('Beneficiary Information:', 10, base)
      base += 10
      doc.setFontStyle('normal')
      doc.text(data.beneficiary.lastName + '\t\t' + data.beneficiary.firstName + '\t\t' + data.beneficiary.middleInitial, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text('Last Name\t\tFirst Name\tM.I.', 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(data.beneficiary.street, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text('Street Address', 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(data.beneficiary.city + '\t' + data.beneficiary.state + '\t' + data.beneficiary.zip, 10, base)
      doc.line(10, base + 1, width, base + 1)
      doc.setFontStyle('italic')
      doc.text('City\t\tState\t\tZip', 10, base + 5)
      doc.setFontStyle('normal')
      base += 15
      doc.text(data.beneficiary.relationship, 10, base)
      doc.text('or Pay to my Estate', 45, base)
      doc.line(10, base + 1, 40, base + 1)
      doc.setFontStyle('italic')
      doc.text('Relationship', 10, base + 5)
      doc.setFontStyle('bold')
      base += 15
      doc.text('Contract Effective Date: ', 10, base)
      doc.line(60, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.CED, 60, base)
      doc.setFontStyle('bold')
      base += 5
      doc.text('Desired Insurance Effective Date: ', 10, base)
      doc.line(78, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.DIED, 78, base)
      doc.setFontStyle('bold')
      base += 5
      doc.text('Contractor Number: ', 10, base)
      doc.line(53, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.CN, 53, base)
      doc.setFontStyle('bold')
      base += 5
      doc.text('Leased to: ', 10, base)
      doc.line(35, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.leasedTo, 35, base)
      doc.setFontStyle('bold')
      base += 5
      doc.text('Location Number: ', 10, base)
      doc.line(48, base + 1, width, base + 1)
      doc.setFontStyle('normal')
      doc.text(data.locationNumber, 48, base)
      base += 20
      doc.text('Quasar Risk Advisors\nP.O. Box\nLand O Lakes, FL 34639\nOffice - 813-540-6833\nFax - 813-333-2966\ngeneralemailbox@quasar here\n', 10, base)
      let leftMargin = 105
      doc.setFontStyle('bold')
      doc.text('Acceptance', 140, 40)
      base = 50
      doc.setFontSize(9)
      doc.setFontStyle('normal')
      doc.text('I hereby request coverage under the Independent Contractor\nProgram. I verify that I am the independent contractor named on\nthis enrollment form who is under contract to the sponsoring\ncompany on the date of this application. I verify that I am also an\napproved independent contractor under contract to the sponsoring\ncompany and understand that I am covered only while contracted for\nthe sponsoring company. I have read and understand the terms and\nconditions on the reverse side and have designated the noted\nbeneficiary, in the event of my death.\n\nI certify that I am under the age of 75 as of the date set forth below.\n\nI understand and acknowledge that QUASAR RISK ADVISORS is\nthe insurance agent with limited authority to procure the insurance\ncoverage referenced in this enrollment form. I also acknowledge that\nI have not sought or received insurance advice from QUASAR on\nthe referenced insurance coverage as it applies to me and/or my\nbusiness needs. I also understand and acknowledge QUASAR RISK\nADVISORS uses a third party claims administrator that is authorized\nto carry out the reasonable and customary duties of a claims\nadministrator for the insurance coverage hereby offered. I further\nunderstand and acknowledge that compensation for services rendered\nfor the above are part of the cost of the insurance coverage and not\nseparately charged to me.\n\nIn accordance with my lease agreement and as an addendum thereto,\nI, the Independent Contractor, authorize the sponsoring company to\nperiodically deduct my insurance costs. If such settlements (or other\nmonies due you) are not sufficient to allow deduction of the cost, I\nwill remit by certified check or money order the outstanding\ninsurance cost to Quasar Risk Advisors, PO Box "TBD", Land O\nLakes, FL 34639 within a ten (10) day period. Otherwise, I\nunderstand the insurance underwriters may cancel this insurance\ncoverage within policy terms and conditions. I also understand\ncoverage will not automatically be reinstated if cancellation is\nprocessed.\n', leftMargin, base)
      base += 150
      doc.setFontSize(12)
      doc.setFontStyle('bold')
      doc.text('Signature:\n\nDate:', leftMargin, base)
      base += 20
      doc.line(leftMargin + 20, base + 1, leftMargin + width, base + 1)
      base += 5
      doc.line(leftMargin + 20, base + 1, leftMargin + width, base + 1)
      doc.setFontSize(10)
      doc.setFontStyle('normal')
      doc.text('page 1 of 2', leftMargin + 80, 290)
      doc.addPage()
      doc.setFontSize(10)
      doc.setFontStyle('normal')
      doc.text('ICOA - Enrollment Form', 10, 10)
      doc.setFontStyle('bold')
      doc.setFontSize(14)
      doc.text('Terms & Conditions', 10, 20)
      doc.setFontSize(12)
      doc.text('Please Read Carefully', 10, 27)
      base = 40
      doc.setFontSize(9)
      doc.setFontStyle('normal')
      doc.text('It is further understood and agreed:', 10, base)
      base += 10
      doc.text('1. Not Statutory Workers’ Compensation & Employers’\nLiability: This coverage is NOT a statutory Workers’\nCompensation and Employers’ Liability policy and the\nbenefits under this policy do not necessarily equal the benefits\nwhich an individual might be eligible for under statutory\nWorkers’ Compensation. However, the Insured Person agrees\nthat in the event of an occupational accident, he will look to\nthis program in lieu of seeking Workers’ Compensation\ncoverage.\n\n2. Assignment of Benefits: In the event benefits are paid from\nthe statutory Workers’ Compensation and Employers’ Liability\nPolicy of the sponsoring company or any similar policy\nbecomes liable for such benefits, the benefits which an\nInsured Person is entitled to under this policy will be\nautomatically assigned to the sponsoring company. Therefore,\nin such event the Insured Person hereby agrees to the\nimmediate assignment to the sponsoring company of all\nbenefits which he receives or would otherwise be payable to\nhim or any third party under this program.\n\n3. Cost and Consent to Cost Change: The Insured Person\nunderstands that the insurance cost shown may include taxes,\nfees and administrative expenses which he accepts and\nacknowledges as part of the insurance cost. The insurance\nunderwriters reserve the right to change the rate by giving\nwritten notice to you.\n\n4. Evidence of Coverage: Your state of principal operations\ncould require you to purchase Statutory Workers\nCompensation; otherwise, the sponsoring company will\naccept this Independent Contractor Occupational Accident\nProgram. If you do not participate in this Occupational\nAccident Program, you are required to have on file a\ncertificate of insurance for Statutory Workers’ Compensation\nor when allowed by law, an Occupational Accident Certificate;\nyour insurance agent should provide this information to the\nsponsoring company.\n\nYou will be enrolled in the Independent Contractor Program\nuntil you provide proof of appropriate coverage. At that time\nyou will receive an adjustment in any costs charged to you.\n', 10, base)
      doc.text('5. Termination: In the event the contractor’s lease agreement\nwith the sponsoring company is terminated for any reason by\neither party, the Occupational Accident coverage will be\ncancelled effective the date of the contract termination or the\nearliest date thereafter allowed by law. You should make\narrangements to replace coverage immediately.\n\n6. Terms & Conditions: Coverage will be subject to all policy\nterms, conditions and exclusions as detailed in the Evidence of\nInsurance. The Insured Person must be under age 75 to enroll\nin the plan.\n\n7. Authorization of Settlement Deduction: You, the\nIndependent Contractor, authorize the sponsoring company to\ntake from your settlement checks, funds, accruals or other\ncompensation, on a periodic basis (e.g. weekly or monthly) in\namounts sufficient to pay the cost of premiums and taxes and\nhereby instruct it to forward direct to Quasar Risk Advisors\nsuch amounts by the 15th of each month. Your cost (as\ndescribed in “Cost and Consent to Rate”) will be deducted from\nyour settlement check. If your settlement check is not enough to\ncover the insurance cost to you, you will be asked to forward a\ncheck or money order made payable to Quasar Risk Advisors at\nthe address listed below\n\nimmediately, or the coverage will be cancelled, in\naccordance with policy terms and conditions.\n\n8. Effective Date: Coverage shall become effective on the\ndate your application is accepted by Midlands\nManagement but no sooner than the first day of the\nmonth following your completion and signing of this\nenrollment form.\n', leftMargin, base)
      doc.text('Quasar Risk Advisors\nP.O. Box\nLand O Lakes, FL 34639\nOffice - 813-540-6833\nFax - 813-333-2966\ngeneralemailbox@quasar here\n', leftMargin, 220)
      doc.setFontSize(10)
      doc.setFontStyle('normal')
      doc.text('page 2 of 2', leftMargin + 80, 290)
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
  border 0px green solid
</style>
