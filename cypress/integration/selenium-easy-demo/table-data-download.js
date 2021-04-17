describe('Practice test for Data Table with Download / Print', () => {
  beforeEach('', () => {
    cy.visit('/table-data-download-demo.html')
    cy.url().should('contain', '/table-data-download-demo')
  })
  it('Test for Copy file', () => {
    search('Mark')
    extractDataByUsing('pdf')
  })
  function search(value) {
    cy.get('[type="search"]').type(value)
  }
  function extractDataByUsing(fileType) {
    function file() {
      let fileExtension
      if (fileType.includes('csv')) {
        fileExtension = 'csv'
      } else if (fileType.includes('excel')) {
        fileExtension = 'xlsx'
      } else if (fileType.includes('pdf')) {
        fileExtension = 'pdf'
      }
      return fileExtension
    }
    cy.log(file())
    cy.contains('.dt-button', fileType, { matchCase: false }).click()

    const filePath = `cypress/downloads/Selenium Easy - Download Table Data to CSV, Excel, PDF and Print.${file()}`
    cy.log(filePath)
    cy.pause()
    cy.readFile(filePath).should('exist')
  }
})
