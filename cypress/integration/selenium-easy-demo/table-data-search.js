///<reference types="cypress"/>
import TableDataSearch_PO from '..//../support/PageObjects/selenium_easy_demo/TableDataSearch'

describe('Practice test for Table Data Search', () => {
  const dataSearch_PO = new TableDataSearch_PO()

  before('', () => {
    cy.fixture('selenium-easy-demo/table-data-search.json').then(
      (dataSearch) => {
        globalThis.dataSearch = dataSearch
      }
    )
  })
  beforeEach('Navigate to test page', () => {
    cy.visit('/table-search-filter-demo.html')
    cy.url().should('contain', '/test/table-search-filter-demo')
  })
  it('Test for Tasks', () => {
    cy.contains('.panel-primary', 'Tasks').within(() => {
      cy.get('[id="task-table-filter"]').type('m', '{enter}')
      cy.get('[id="task-table"]')
        .as('table')
        .find('td')
        .contains('Landing Page')
        .parent()
        .within(() => {
          cy.get('td').eq(3).should('contain', 'completed')
        })
    })
  })
  it('Test for Tasks, get all Task that have status', () => {
    cy.log(dataSearch_PO.getTaskByStatus(dataSearch.status))
  })

  it.only('Test for Listed Users', () => {
    focusPanel('Listed Users').within(() => {
      searchUser('First Name', 'B')
      getUsername('Brigade', 'larrypt')
    })
  })

  function focusPanel(title) {
    return cy.contains('.panel-primary', title)
  }
  function searchUser(fieldName, input) {
    const value = (value) => `[placeholder="${value}"]`
    cy.get('.form-control').should('be.disabled')
    cy.get('button').click()
    cy.get('.form-control').should('be.enabled')
    cy.get(value(fieldName)).type(input)
  }
  function getUsername(text, expectedResult) {
    cy.get('td')
      .contains(text)
      .parent()
      .within(() => {
        cy.get('td').eq(1).invoke('text').should('contain', expectedResult)
      })
  }
})
