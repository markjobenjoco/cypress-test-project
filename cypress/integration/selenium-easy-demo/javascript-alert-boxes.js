describe('Practice test for javascript Alert box, Confirm box, and Prompt box.', () => {
  beforeEach('Open page', () => {
    cy.openPage('/javascript-alert-box-demo.html')
  })
  it('Practice test for first form Java Script Alert Box', () => {
    cy.contains(
      '[class="panel panel-primary"]',
      'Java Script Alert Box'
    ).within(() => {
      cy.contains('button', 'Click me!').click()
      cy.on('window:alert', (str) => {
        expect(str).to.eq('I am an alert box!')
      })
    })
  })

  //not working as intended
  it('Practice test for first form Java Script Confirm Box', () => {
    const confirm = false
    cy.contains(
      '[class="panel panel-primary"]',
      'Java Script Confirm Box'
    ).within(() => {
      cy.contains('button', 'Click me!').click()
      cy.on('window:confirm', (str) => {
        return confirm
      })
    })
  })
  //not working as intended
  it('Practice test for first form Java Script Confirm Box', () => {
    const confirm = false
    cy.contains(
      '[class="panel panel-primary"]',
      'Java Script Confirm Box'
    ).within(() => {
      const stub = cy.stub()
      stub.onFirstCall(0).returns(confirm)
      cy.on('window:confirm', stub)
      cy.contains('button', 'Click me!').click()
    })
  })
  it('Practice test for second form Java Script Alert Box', () => {
    const text = 'QA test'
    cy.window().then((win) => {
      const stub = cy.stub(win, 'prompt')
      stub.returns(text)
      cy.contains('button', 'Click for Prompt Box').click()
      cy.get('#prompt-demo').should('contain', text)
    })
  })
})
