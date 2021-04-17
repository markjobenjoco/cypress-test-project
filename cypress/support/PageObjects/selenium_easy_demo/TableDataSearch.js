class TableDataSearch_PO {
  getTaskByStatus(status) {
    let statusInProg = []
    const quiet = { log: false }
    cy.contains('.panel-primary', 'Tasks').within(() => {
      cy.get('td').each(($el) => {
        const value = $el.text()
        if (value.includes(status)) {
          cy.wrap($el, quiet)
            .parent(quiet)
            .within(() => {
              cy.get('td', quiet)
                .eq(1, quiet)
                .then((task) => {
                  statusInProg.push(task.text())
                })
            })
        }
      })
    })
    return statusInProg
  }
}
export default TableDataSearch_PO
