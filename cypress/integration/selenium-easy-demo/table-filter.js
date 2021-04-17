describe('Practice test for Table Filter', () => {
  beforeEach('', () => {
    cy.visit('/table-records-filter-demo.html')
    cy.url().should('contain', '/table-records-filter-demo')
  })

  it('Test for table filter', () => {
    filterByColor('all')
  })
  function filterByColor(buttonName) {
    cy.goToForm('Filter Records').within(() => {
      cy.get('button[type="button"]')
        .contains(buttonName, { matchCase: false })
        .click()
      cy.get('table > tbody').as('tableBody')
      if (buttonName.toLowerCase().includes('all')) {
        cy.get('@tableBody')
          .find('tr:not([style="display: none;"])')
          .its('length')
          .should('eq', 5)
      } else {
        cy.get('@tableBody')
          .find('tr:not([style="display: none;"])')
          .each((item) => {
            cy.wrap(item)
              .find('[class="media"] i')
              .invoke('attr', 'style')
              .should('contain', buttonName.toLowerCase())
          })
      }
    })
  }
})
