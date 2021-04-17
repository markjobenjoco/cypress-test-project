describe('Practice test for Stylish progress bar demo for the automation', () => {
  beforeEach('Navigate to test page', () => {
    cy.visit('/bootstrap-download-progress-demo.html')
    cy.url().should('contain', '/bootstrap-download-progress-demo')
  })
  it('Practice test for Progress Bar for Download', () => {
    cy.contains('.panel-primary', 'Progress Bar for Download').within(() => {
      cy.get('#cricle-btn').click()
      cy.get('.prog-circle')
        .find('.percenttext', { timeout: 100000 })
        .should('contain', '100')
    })
  })
})
