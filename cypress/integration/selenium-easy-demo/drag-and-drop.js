import '@4tw/cypress-drag-drop'
describe('Practice test for Drag and Drop', () => {
  context('Drag and Drop Demo for Automation', () => {
    beforeEach('Open page', () => {
      cy.openPage('/drag-and-drop-demo.html')
    })

    it.only('Drag and drop item using trigger command', () => {
      const items = ['Draggable 4', 'Draggable 1']
      items.forEach((item) => {
        dragItem_2(item)
      })
    })

    // not working as intended
    it('Drag and drop item using plugins', () => {
      const items = ['Draggable 4', 'Draggable 1']
      items.forEach((item) => {
        dragItem(item)
      })
    })
  })

  function dragItem(item) {
    cy.contains('span', item).drag('#mydropzone', { log: false })
    cy.get('#droppedlist').find('span').should('contain', item)
  }
  function dragItem_2(item) {
    const dataTransfer = new DataTransfer()
    cy.contains('span', item).trigger('dragstart', { dataTransfer })
    cy.get('#mydropzone').trigger('drop', { dataTransfer })
    cy.contains('span', item).trigger('dragend')
    cy.get('#droppedlist').find('span').should('contain', item)
  }
})
