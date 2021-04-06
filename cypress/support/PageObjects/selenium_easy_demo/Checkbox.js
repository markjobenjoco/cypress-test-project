class CheckboxDemo_PO {
  onCheck_SingleCheckboxDemo(panel_name) {
    cy.get('[class="panel panel-default"]')
      .contains(panel_name)
      .closest('.panel-default')
      .within(() => {
        cy.get('#isAgeSelected').check().should('be.checked');
        cy.get('#txtAge').should('contain', 'Success');
      });
  }
  onCheck_MultipleCheckboxDemo(panel_name, option) {
    cy.get('[class="panel panel-default"]')
      .contains(panel_name)
      .closest('.panel-default')
      .within(() => {
        cy.get('.checkbox').as('checkbox');
        cy.get('@checkbox').should('not.be.checked').contains(option).click();
        cy.get('[id="check1"]').as('checkAllCheckbox').click();
        cy.get('@checkbox').find('[type="checkbox"]').should('be.checked');
        cy.get('@checkAllCheckbox').should('have.value', 'Uncheck All');
        cy.get('@checkbox').contains(option).click();
        cy.get('@checkAllCheckbox').should('have.value', 'Check All');
      });
  }
}
export default CheckboxDemo_PO;
