class AjaxForm_PO {
  onEnter_Name(title) {
    cy.get('#title').type(title);
  }
  onEnter_Comment(description) {
    cy.get('#description').type(description);
  }
  onClick_Submit() {
    cy.get('#btn-submit').click().should('not.exist');
    cy.get('[id="submit-control"]', { timeout: 10000 }).should(
      'contain',
      'Form submited Successfully!'
    );
  }
}
export default AjaxForm_PO;
