///<reference types="cypress"/>

import DatePicker_PO from '..//..//support/PageObjects/selenium_easy_demo/DatePicker'
describe('Practice test for Bootstrap Date Picker', () => {
  const datePicker_PO = new DatePicker_PO()

  let date = new Date()
  let currentDay = date.getDate()
  let currentMonth = date.toLocaleString('default', { month: 'long' })
  let currentYear = date.getFullYear()
  let currentDate

  before('log', () => {
    cy.fixture('selenium-easy-demo/datepicker.json')
      .then((datepicker) => {
        globalThis.datepicker = datepicker
      })
      .then(() => {
        currentDate = `${currentMonth} ${currentDay}, ${currentYear}`
        cy.log(`Current date: ${currentDate}`)
      })
  })

  beforeEach('Navigate to page', () => {
    // cy.openHomepage();
    // cy.selectChallenge('Date pickers', 'Bootstrap Date Picker');
    cy.visit('/bootstrap-date-picker-demo.html')
  })
  it('Test for First Date example', () => {
    const pastMonth = datepicker.date.oldMonth
    const pastDay = datepicker.date.oldDay
    const pastYear = datepicker.date.oldYear
    const oldDate = `${pastMonth} ${pastDay}, ${pastYear}`

    cy.log(`Old date: ${oldDate}`)
    cy.wrap(Date.parse(oldDate)).then(($parseOldDate) => {
      expect($parseOldDate).to.lte(Date.parse(currentDate))
    })

    datePicker_PO.selectDateField('Date Example :', 'dd/mm/yyyy')
    datePicker_PO.selectMonthAndYear(pastMonth, pastYear)
    datePicker_PO.selectDay(pastDay)
  })
  it('Test for Date Range', () => {
    const startMonth = datepicker.dateRange.start.month
    const startDay = datepicker.dateRange.start.day
    const startYear = datepicker.dateRange.start.year
    const endMonth = datepicker.dateRange.end.month
    const endDay = datepicker.dateRange.end.day
    const endYear = datepicker.dateRange.end.year

    const startDate = `${startMonth} ${startDay}, ${startYear}`
    const endDate = `${endMonth} ${endDay}, ${endYear}`

    cy.log(`Start date: ${startDate}`)
    cy.log(`End date: ${endDate}`)

    cy.wrap(Date.parse(startDate)).then(($parseStartDate) => {
      expect($parseStartDate).to.lt(Date.parse(endDate))
    })

    datePicker_PO.selectDateField('Date Range Example :', 'Start date')
    datePicker_PO.selectMonthAndYear(startMonth, startYear)
    datePicker_PO.selectDay(startDay)
    datePicker_PO.selectDateField('Date Range Example :', 'End date')
    datePicker_PO.selectMonthAndYear(endMonth, endYear)
    datePicker_PO.selectDay(endDay)
  })
  it("Test for First Date example. Set today's date then clear", () => {
    datePicker_PO.setTodaysDate()
    datePicker_PO.clearFieldDate()
  })
})
