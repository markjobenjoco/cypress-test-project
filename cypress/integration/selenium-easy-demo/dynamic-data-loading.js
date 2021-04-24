describe('Practice test for Dynamic Data Loading', () => {
  context('Loading the data Dynamically', () => {
    beforeEach('Open page', () => {
      cy.openPage('/dynamic-data-loading-demo.html')
    })

    it('Get random user', () => {
      cy.get('#save').click()
      cy.get('#loading', { timeout: 10000 })
        .should('be.visible')
        .and('contain', 'First Name')
        .and('contain', 'Last Name')
    })
  })
})
