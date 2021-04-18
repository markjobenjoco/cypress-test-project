describe('Practice test for Bootstrap Modal Example for Automation', () => {
  beforeEach('Initialize page', () => {
    cy.visit('/bootstrap-modal-demo.html')
    cy.url().should('contain', '/bootstrap-modal-demo')
    cy.reload()
  })
  it('Test for Single Modal Example', () => {
    singleModal('Single Modal Example', 'save')
  })
  it('Test for Multiple Modal Example', () => {
    multipleModal('Multiple Modal Example', 'save', 'save')
  })
  function singleModal(panelName, toDo) {
    cy.goToForm(panelName).within(() => {
      cy.contains('.btn-primary', 'Launch modal').click()
    })
    cy.contains('div.modal-content', 'Modal Title')
      .as('modal')
      .find('.modal-body')
      .invoke('text')
      .should(
        'contain',
        'This is the place where the content for the modal dialog displays'
      )
    cy.get('@modal').contains('a', toDo, { matchCase: false }).click()
  }
  function multipleModal(panelName, toDo_2, toDo_3) {
    const modal = (m) => `a, ${m}`
    const toDo = 'Launch modal'
    cy.log(modal(toDo))
    cy.goToForm(panelName).within(() => {
      cy.contains('.btn-primary', 'Launch modal').click()
    })
    cy.contains('div.modal-content', 'First Modal').as('firstModal')
    cy.get('@firstModal').contains('a', toDo).click()
    cy.contains('div.modal-content', 'Modal 2').as('secondModal')
    cy.get('@secondModal')
      .find('.modal-body')
      .invoke('text')
      .should('contain', 'modal dialog displays.')
    // cy.pause()
    if (toDo_2.toLocaleLowerCase().includes('save')) {
      cy.get('@secondModal').contains('a', 'Save').click()
    } else {
      cy.get('@secondModal').contains('a', 'Close').click()
      if (toDo_3.toLocaleLowerCase().includes('save')) {
        cy.get('@firstModal').contains('a', 'Save').click()
      } else {
        cy.get('@firstModal').contains('a', 'Close').click()
      }
    }
  }
})
