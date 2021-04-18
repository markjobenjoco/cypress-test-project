describe('Practice test for Modal dialog with progress bar', () => {
  beforeEach('Open page', () => {
    cy.openPage('/bootstrap-progress-bar-dialog-demo.html')
  })
  it('Test for example 1', () => {
    const buttons = {
      firstBtn: 'btn-primary',
      secondBtn: 'btn-success',
      thridBtn: 'btn-warning',
    }
    clickButton(buttons.firstBtn)
    clickButton(buttons.secondBtn)
    clickButton(buttons.thridBtn)
  })

  function clickButton(buttonName) {
    const btnName = (btn) => `[class="btn ${btn}"]`
    cy.get(btnName(buttonName)).click()
    cy.get('[class="modal fade in"]')
      .as('modalPopup')
      .should('exist')
      .and('be.visible')
    cy.get('@modalPopup', { timeout: 10000 }).and('not.be.visible')
  }
})
