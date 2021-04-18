describe('Practice for Bootstrap Alerts messages', () => {
  beforeEach('Navigate to page', () => {
    cy.visit('/bootstrap-alert-messages-demo.html')
    cy.url().should('contain', '/bootstrap-alert-messages-demo')
  })
  it('Test for Bootstrap Alerts messages', () => {
    clickAutocloseableSuccess()
    clickNormalSuccess()
  })
  function clickAutocloseableSuccess() {
    cy.get('#autoclosable-btn-success').click()
    cy.get('.alert-autocloseable-success').then((text) => {
      const alertMessage = text.text()
      cy.log(alertMessage)
    })
  }
  function clickNormalSuccess() {
    cy.get('#normal-btn-success').click()
    cy.get('.alert-normal-success').then((text) => {
      const alertMessage = text.text()
      cy.log(alertMessage)
      cy.wrap(text).find('button').click()
    })
  }
})
