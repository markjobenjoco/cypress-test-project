class DatePicker_PO {
  // Bootstrap datepicker
  selectDateField(panelName, dateOption) {
    const dte = (dateField) => `[placeholder="${dateField}"]`
    cy.get('[class="panel panel-default"]')
      .contains(panelName)
      .closest('[class="panel panel-default"]')
      .within(() => {
        cy.get(dte(dateOption)).click()
      })
  }

  selectMonthAndYear(month, year) {
    cy.get('[class="datepicker-days"]')
      .find('[class="datepicker-switch"]')
      .as('currentDisplayedMonthYear')
    cy.get('@currentDisplayedMonthYear')
      .closest('[class="datepicker-days"]')
      .as('datepicker')

    cy.get('@currentDisplayedMonthYear')
      .then(($displayedYear) => {
        let displayedYear = $displayedYear.text()
        if (!displayedYear.includes(year)) {
          if (Date.parse(year) > Date.parse(displayedYear)) {
            cy.get('@datepicker').find('[class="next"]').click()
          } else if (Date.parse(year) < Date.parse(displayedYear)) {
            cy.get('@datepicker').find('[class="prev"]').click()
          }
          this.selectMonthAndYear(month, year)
        }
      })
      .then(() => {
        cy.get('@currentDisplayedMonthYear').then(($displayedMonth) => {
          let displayedMonth = $displayedMonth.text()
          if (!displayedMonth.includes(month)) {
            if (Date.parse(`${month}, ${year}`) > Date.parse(displayedMonth)) {
              cy.get('@datepicker').find('[class="next"]').click()
            } else if (
              Date.parse(`${month}, ${year}`) < Date.parse(displayedMonth)
            ) {
              cy.get('@datepicker').find('[class="prev"]').click()
            }
            this.selectMonthAndYear(month, year)
          }
        })
      })
  }
  selectDay(day) {
    cy.get('[class="datepicker-days"]')
      .find('.day')
      .contains(day)
      .invoke('attr', 'class')
      .then((invokeClass) => {
        if (invokeClass.includes('disabled')) {
          day -= 1
        }
        cy.get('[class="day"]').contains(day).click({ force: true })
        cy.get('[class="container-fluid text-center"]').click({ force: true })
      })
  }
  setTodaysDate() {
    cy.get('[class="panel panel-default"]')
      .contains('Date Example :')
      .closest('[class="panel panel-default"]')
      .within(() => {
        cy.get('[class="form-control"]').as('dateField')
        cy.get('[class="input-group-addon"]').click()
      })
    cy.get('[class="datepicker-days"]').within(() => {
      cy.get('[class="today"]').click()
    })
  }
  clearFieldDate() {
    cy.get('[class="panel panel-default"]')
      .contains('Date Example :')
      .closest('[class="panel panel-default"]')
      .within(() => {
        cy.get('[class="form-control"]').as('dateField')
        cy.get('[class="input-group-addon"]').click()
      })
    cy.get('[class="datepicker-days"]').within(() => {
      cy.get('[class="clear"]').click()
    })
  }

  // JQuery datepicker
  dateField(textField) {
    const f = (field) => `[id="${field}"]`
    return cy.get(f(textField)).clear().click()
  }
  setMonthYear(month, year) {
    const quiet = { log: false }
    let yearValue
    cy.get('[class="ui-datepicker-year"]', quiet)
      .then(($yearText) => {
        yearValue = $yearText.text()
        if (!yearValue.includes(year)) {
          if (year < yearValue) {
            cy.get('[data-handler="prev"]', quiet).click(quiet)
          } else if (year > yearValue) {
            cy.get('[data-handler="next"]', quiet).click(quiet)
          }
          this.setMonthYear(month, year)
        }
      })
      .then(() => {
        if (yearValue.includes(year)) {
          cy.get('[data-handler="selectMonth"]').select(
            getMonthFromString(month).toString()
          )
        }
      })
  }
  setDay(day) {
    cy.get('[data-handler="selectDay"]').contains(day).click()
  }
}
function getMonthFromString(mon) {
  var d = Date.parse(mon + '1, 2012')
  if (!isNaN(d)) {
    return new Date(d).getMonth()
  }
  return -1
}
export default DatePicker_PO
