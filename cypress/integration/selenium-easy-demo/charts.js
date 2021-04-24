describe('Practice test for charts', () => {
  beforeEach('Open page', () => {
    cy.openPage('/charts-mouse-hover-demo.html')
  })

  it('Test chart', () => {
    checkData('video', 62)
    checkData('photo', 21)
    checkData('audio', 10)
  })

  function checkData(fieldName, expectedValue) {
    const field = (f) => `li.${f}`
    cy.get(field(fieldName)).then(($value) => {
      const value = $value.text()
      expect(value).to.contain(expectedValue)
    })
  }
})
