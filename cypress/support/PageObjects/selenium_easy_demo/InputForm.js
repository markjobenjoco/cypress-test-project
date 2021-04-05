class InputForm_PO {
  onEnter_ContactUsDetails(
    first_name,
    last_name,
    email,
    phone,
    address,
    city,
    state,
    zip,
    website,
    isHosting,
    comment
  ) {
    cy.url().should('contain', '/input-form-demo.html');
    cy.get('[name="first_name"]').as('fName').type(first_name);
    cy.get('[name="last_name"]').as('lName').type(last_name);
    cy.get('[name="email"]').as('email').type(email);
    cy.get('[name="phone"]').as('phone').type(phone);
    cy.get('[name="address"]').as('address').type(address);
    cy.get('[name="city"]').as('city').type(city);
    cy.get('[name="state"]').as('state').select(state);
    cy.get('[name="zip"]').as('zip').type(zip);
    cy.get('[name="website"]').as('website').type(website);
    cy.get('.radio').as('hosting').contains(isHosting).click();
    cy.get('[name="comment"]').as('comment').type(comment);

    cy.get('[class="btn btn-default"]').click();

    cy.get('@fName').should('be.empty');
    cy.get('@lName').should('be.empty');
    cy.get('@email').should('be.empty');
    cy.get('@phone').should('be.empty');
    cy.get('@address').should('be.empty');
    cy.get('@city').should('be.empty');
    cy.get('@state').should('have.value', ' ');
    cy.get('@zip').should('be.empty');
    cy.get('@website').should('be.empty');
    cy.get('@hosting').should('not.be.checked');
    cy.get('@comment').should('be.empty');
  }
}
export default InputForm_PO;
