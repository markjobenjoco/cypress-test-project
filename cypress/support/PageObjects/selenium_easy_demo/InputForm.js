/// <reference types="cypress"/>
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

  onEnter_FirstName(first_name) {
    cy.get('[name="first_name"]').type(first_name);
  }
  onEnter_LastName(last_name) {
    cy.get('[name="last_name"]').type(last_name);
  }
  onEnter_Email(email) {
    cy.get('[name="email"]').type(email);
  }
  onEnter_PhoneNumber(phone) {
    cy.get('[name="phone"]').type(phone);
  }
  onEnter_Address(address) {
    cy.get('[name="address"]').type(address);
  }
  onEnter_City(city) {
    cy.get('[name="city"]').type(city);
  }
  onEnter_State(state) {
    cy.get('[name="state"]').select(state);
  }
  onEnter_ZipCode(zip) {
    cy.get('[name="zip"]').type(zip);
  }
  onEnter_Website(website) {
    cy.get('[name="website"]').type(website);
  }
  onSelect_Hosting(isHosting) {
    cy.get('.radio').contains(isHosting).click();
  }
  onEnter_Comment(comment) {
    cy.get('[name="comment"]').type(comment);
  }
  onClick_Send() {
    cy.get('[class="btn btn-default"]').click();
  }
}
export default InputForm_PO;
