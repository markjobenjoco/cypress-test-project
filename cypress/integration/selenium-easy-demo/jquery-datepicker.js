///<reference types="cypress"/>

import DatePicker_PO from '..//..//support/PageObjects/selenium_easy_demo/DatePicker'
describe('Practice test for JQuery Date Picker', () => {
  const datePicker_PO = new DatePicker_PO()

  before('', () => {
    cy.fixture('selenium-easy-demo/datepicker.json').then(($datepicker) => {
      globalThis.datePicker = $datepicker
    })
  })
  beforeEach('Navigate to page', () => {
    cy.visit('/jquery-date-picker-demo.html')
  })
  it('Test for JQuery Date Picker Demo', () => {
    const startMonth = datePicker.dateRange.start.month
    const startDay = datePicker.dateRange.start.day
    const startYear = datePicker.dateRange.start.year
    const endMonth = datePicker.dateRange.end.month
    const endDay = datePicker.dateRange.end.day
    const endYear = datePicker.dateRange.end.year

    const startDate = `${startMonth} ${startDay}, ${startYear}`
    const endDate = `${endMonth} ${endDay}, ${endYear}`

    cy.wrap(Date.parse(startDate)).then(($parseStartDate) => {
      expect($parseStartDate).to.lessThan(Date.parse(endDate))
    })

    cy.log(`Date from: ${startDate}`)
    cy.log(`Date to: ${endDate}`)

    datePicker_PO.dateField('from')
    datePicker_PO.setMonthYear(startMonth, startYear)
    datePicker_PO.setDay(startDay)
    datePicker_PO.dateField('to')
    datePicker_PO.setMonthYear(endMonth, endYear)
    datePicker_PO.setDay(endDay)
  })
})
