///<reference types="cypress"/>

describe('Practice test for table pagination', () => {
  beforeEach('navigating to test page', () => {
    cy.visit('/table-pagination-demo.html')
    cy.url().should('contain', '/table-pagination-demo', { matchCase: false })
  })
  it('Test for Table with Pagination', () => {
    let pages = []
    cy.get('.page_link')
      .each(($el) => {
        pages.push($el.text())
      })
      .then(() => {
        for (let i = 0; i < pages.length; i++) {
          const element = pages[i]
          cy.log(element)
          if (element == 1) {
            cy.get('.prev_link')
              .invoke('attr', 'style')
              .should('contain', 'none')
          }
          if (element == 2) {
            cy.get('.next_link').click()
            cy.get('.prev_link')
              .invoke('attr', 'style')
              .should('not.contain', 'none')
          }
          if (element == 3) {
            cy.get('.next_link').click()
            cy.get('.next_link')
              .invoke('attr', 'style')
              .should('contain', 'none')
          }
        }
      })
  })
})
