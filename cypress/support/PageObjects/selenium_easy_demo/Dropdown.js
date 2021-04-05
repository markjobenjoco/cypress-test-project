class Dropdown_PO {
  onSelect_SelectList(day) {
    cy.get('[class="panel panel-default"]')
      .contains('Select List Demo')
      .closest('.panel')
      .within(() => {
        cy.get('#select-demo').select(day).should('contain', day);
        cy.get('.selected-value').should('contain', day);
      });
  }
  onClick_ShowFirst(states) {
    cy.get('[class="panel panel-default"]')
      .contains('Multi Select List Demo')
      .closest('.panel')
      .within(() => {
        states.forEach((element) => {
          cy.get('#multi-select').contains(element).click({ ctrlKey: true });
        });
        cy.get('#printMe').click();
        cy.get('.getall-selected').should(
          'contain',
          'First selected option is : ' + states[0]
        );
      });
  }
  onClick_ShowAll(states) {
    cy.get('[class="panel panel-default"]')
      .contains('Multi Select List Demo')
      .closest('.panel')
      .within(() => {
        states.forEach((element) => {
          cy.get('#multi-select').contains(element).click({ ctrlKey: true });
        });
        cy.get('#printAll').click();
        cy.get('.getall-selected').should(
          'contain',
          'Options selected are : ' + states
        );
      });
  }
}
export default Dropdown_PO;
