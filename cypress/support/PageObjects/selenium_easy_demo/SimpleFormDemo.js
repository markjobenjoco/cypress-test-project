class SimpleFormDemo_PO {
  onCreate_SingleInputField(message) {
    cy.get('#get-input #user-message', { timeout: 10000 }).type(message);
    cy.get('[onclick="showInput();"]').click();
    cy.get('div[id="user-message"]').should('contain', message);
  }

  onCreate_TwoInputFields(valueA, valueB, expectedResult) {
    cy.get('#sum1').type(valueA);
    cy.get('#sum2').type(valueB);
    cy.get('button[onclick="return total()"]').click({ force: true });
    cy.get('.panel')
      .contains('Two Input Fields')
      .closest('.panel')
      .find('#displayvalue')
      .should('contain', expectedResult);
  }
}
export default SimpleFormDemo_PO;
