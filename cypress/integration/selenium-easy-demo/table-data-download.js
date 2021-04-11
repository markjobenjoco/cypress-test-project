describe('Practice test for Data Table with Download / Print', () => {
  beforeEach('', () => {
    cy.visit('/table-data-download-demo.html')
    cy.url().should('contain', '/table-data-download-demo')
  })
  it('Test for Copy file', () => {
    search('Mark')
    // copy()
    downloadFile()
  })
  function search(value) {
    cy.get('[type="search"]').type(value)
  }
  function copy() {
    cy.get('[aria-controls="example"] > span')
      .contains('Copy', { matchCase: false })
      .click()
    cy.get('#datatables_buttons_info > h2').should('be.visible').and('exist')
    cy.get('#datatables_buttons_info > h2', { timeout: 5000 }).should(
      'not.exist'
    )
  }
  function downloadFile() {
    cy.get('[aria-controls="example"] > span').contains('PDF').click()
    cy.downloadFile(
      'https://www.seleniumeasy.com/test/table-data-download-demo.html',
      'cypress/fixtures/selenium-easy-demo/myDownloads',
      'table.pdf'
    )
  }
})
