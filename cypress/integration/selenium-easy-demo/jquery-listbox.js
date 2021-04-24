describe('Practice test for JQuery Listbox', () => {
  context('JQuery Dual List Box Demo', () => {
    beforeEach('Open page', () => {
      cy.openPage('/jquery-dual-list-box-demo.html')
    })

    it('Add specific item to the list', () => {
      const items = ['Isis', 'Sophia', 'Helena']
      items.forEach((item) => {
        addItem(item)
      })
    })
    it('Add all item to the list', () => {
      addAll()
    })
    it('Remove specific item to the list', () => {
      const items = ['Isis', 'Sophia', 'Helena']
      items.forEach((item) => {
        addItem(item)
      })
      items.forEach((item) => {
        removeItem(item)
      })
    })
    it('Remove all item to the list', () => {
      addAll()
      removeAll()
    })
  })

  function addItem(item) {
    cy.get('.pickData').select(item)
    cy.contains('button', 'Add').click()
    cy.get('.pickListResult').find('option').should('contain', item)
  }
  function addAll() {
    cy.get('.pAddAll').click()
    cy.get('.pickData').should('be.empty')
  }
  function removeItem(item) {
    cy.get('.pickListResult').select(item)
    cy.contains('button', 'Remove').click()
    cy.get('.pickData').find('option').should('contain', item)
  }
  function removeAll() {
    cy.get('.pRemoveAll').click()
    cy.get('.pickListResult').should('be.empty')
  }
})
