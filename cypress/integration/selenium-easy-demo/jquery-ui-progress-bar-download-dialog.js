describe('Practice test for JQuery UI Progress bar - Download Dialog', () => {
  beforeEach('Initialize test page', () => {
    cy.visit('/jquery-download-progress-bar-demo.html')
    cy.url().should('contain', '/jquery-download-progress-bar-demo')
  })
  it('Test for JQuery UI Progress bar', () => {
    cy.get('#downloadButton').as('downloadButton').click()
    cy.get('[role="dialog"]')
      .as('progressForm')
      .should('exist')
      .within((form) => {
        cy.get('.progress-label', { timeout: 30000 })
          .should('contain', 'Complete!', { timeout: 30000 })
          .then(($message) => {
            const message = $message.text()
            if (message.includes('Complete')) {
              cy.wrap(form)
                .contains('button', 'Close')
                .should('exist')
                .click({ force: true })
            }
          })
      })
    cy.get('@progressForm').should('not.be.visible')
    cy.get('@downloadButton').should('be.visible')
  })
})
