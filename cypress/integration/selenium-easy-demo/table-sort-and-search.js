describe('Practice test for Table Sort And Search Demo', () => {
  before('', () => {
    cy.fixture('selenium-easy-demo/table-sort-and-search.json').then(
      (userInputs) => {
        globalThis.userInputs = userInputs
      }
    )
  })
  beforeEach('', () => {
    cy.visit('/table-sort-search-demo.html')
    cy.url().should('contain', '/table-sort-search-demo')
  })
  it('Test for Table Sort And Search Demo', () => {
    const filter = userInputs.filter
    const search = userInputs.searchValue
    const colName = userInputs.columnName
    const colValue = userInputs.columnValue

    setFilter(filter)
    searchForItem(search)
    findItem(colName, colValue)
  })
  function setFilter(value) {
    const stringValue = value.toString()
    if (stringValue < 10) {
      cy.get('[name="example_length"]').select('10')
    } else if (stringValue > 10 && stringValue < 25) {
      cy.get('[name="example_length"]').select('25')
    } else if (stringValue > 25 && stringValue < 50) {
      cy.get('[name="example_length"]').select('50')
    } else if (stringValue > 50) {
      cy.get('[name="example_length"]').select('100')
    } else {
      cy.get('[name="example_length"]').select(stringValue)
    }
  }
  function searchForItem(value) {
    cy.get('[type="search"]').type(value)
  }

  function findItem(fieldName, value) {
    const quiet = { log: false }
    let header = []
    let found = false

    function findInPage(index) {
      cy.get('th')
        .as('tableHeader')
        .each(($el) => {
          if (index == 0) header.push($el.text())
        })
        .then(() => {
          // cy.log(`Current index value ${index}`)
          cy.get('a.paginate_button:not(.previous):not(.next)').as('pages')
          cy.get('@pages')
            .its('length')
            .then((len) => {
              if (index > len) {
                return false
              } else if (index == len) {
                cy.log(
                  `Unable to find this ${fieldName} with a value of ${value} in any pages`
                )
                cy.wrap(index).should('not.eq', len)
              } else {
                const indexColumn = header.indexOf(`${fieldName}`) + 1
                // cy.get('@pages').eq(index, quiet).click()
                cy.get(`table tbody > tr > td:nth-of-type(${indexColumn})`)
                  .each(($itemText) => {
                    const itemText = $itemText.text()
                    if (itemText.includes(value)) {
                      cy.log(
                        `Found this ${fieldName} with a value of ${value} in pages ${
                          index + 1
                        }`
                      )
                      found = true
                      cy.wrap(itemText).should('contain', value)
                    }
                  })
                  .then(() => {
                    if (!found) {
                      cy.get('#example_next').click()
                      findInPage(++index)
                    }
                  })
              }
            })
        })
    }
    findInPage(0)
  }
})
