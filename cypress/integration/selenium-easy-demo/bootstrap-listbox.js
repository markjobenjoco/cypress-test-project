///< reference types="cypress"/>
describe('Practice test for Bootstrap List Box', () => {
  beforeEach('Navigate to test page', () => {
    cy.openPage('/bootstrap-dual-list-box-demo.html')
  })

  context('Dual List Box Example', () => {
    it('Move single item from panel to panel', () => {
      const panelLocation = 'left'
      const findItem = 'C'

      enterSearchField(panelLocation, findItem)
      switchPanel(panelLocation, findItem)
    })
    it('Move all item from panel to panel', () => {
      const panelLocation = 'right'
      switchAllItems(panelLocation)
    })
  })
  function enterSearchField(loc, input) {
    const panel = (f) => `.list-${f}`
    cy.get(panel(loc)).within(() => {
      cy.get('[type="text"]').type(input)
    })
  }
  function switchPanel(loc, value) {
    const panel = (f) => `.list-${f}`
    const btn = (b) => `.move-${b}`

    cy.get(panel(loc)).within(() => {
      cy.get('.list-group-item').contains(value, { matchCase: false }).click()
    })

    if (loc === 'right') {
      cy.get(btn('left')).click()
      cy.get(panel('left')).within(() => {
        cy.get('.list-group-item').each(($el) => {
          const text = $el.text()

          if (text.includes(value)) expect(text).to.include(value)
        })
      })
    } else {
      cy.get(btn('right')).click()
      cy.get(panel('right')).within(() => {
        cy.get('.list-group-item').each(($el) => {
          const text = $el.text()
          if (text.includes(value)) expect(text).to.include(value)
        })
      })
    }
  }
  function switchAllItems(loc) {
    const panel = (f) => `.list-${f}`
    const btn = (b) => `.move-${b}`

    cy.get(panel(loc))
      .within(($panel) => {
        cy.wrap($panel).find('[title="select all"]').click()
      })
      .then(() => {
        if (loc === 'right') {
          cy.get(btn('left')).click()
        } else {
          cy.get(btn('right')).click()
        }
      })
    cy.get(panel(loc)).within(($panel) => {
      cy.wrap($panel).find('.list-group > .active').should('not.exist')
    })
  }
})
