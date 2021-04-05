class RadionButtons_PO {
  onCheck_Radionbuttons(panel_name, option) {
    cy.get('[class="panel panel-default"]')
      .contains(panel_name)
      .closest('.panel-default')
      .within(() => {
        cy.get('input[type="radio"]').check(option).should('be.checked');
        cy.get('#buttoncheck').click();
        cy.get('.radiobutton').should('contain', option);
      });
  }
  onCheck_GroupRadioButtons(panel_name, sex, age_group) {
    cy.get('[class="panel panel-default"]')
      .contains(panel_name)
      .closest('.panel-default')
      .within(() => {
        cy.get('input[type="radio"]')
          .check([sex, age_group])
          .should('be.checked');
        cy.get('.btn').click();
        cy.get('.groupradiobutton')
          .should('contain', sex)
          .and('contain', age_group);
      });
  }
}
export default RadionButtons_PO;
