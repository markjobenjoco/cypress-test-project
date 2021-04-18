describe('Practice test for File Download in Alerts and modals', () => {
  before('Open fixture', () => {
    cy.fixture('selenium-easy-demo/long-message.json').then((data) => {
      globalThis.data = data
    })
  })
  beforeEach('open page', () => {
    cy.openPage('/generate-file-to-download-demo.html')
  })
  it('Test for Generated File to Download', () => {
    const message = data.message
    cy.log(message)
    cy.get('#textbox').type(message)
    cy.get('#create').click()
    cy.get('#link-to-download').click()
    cy.readFile('cypress/downloads/easyinfo.txt').should('contain', message)
  })
})
