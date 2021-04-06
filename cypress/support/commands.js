// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

Cypress.Commands.add('openHomepage', () => {
  cy.visit('/');
  cy.get('#at-cv-lightbox-win', { timeout: 10000 }).within(($form) => {
    cy.wrap($form).find('#at-cv-lightbox-close').click({ force: true });
  });
});

Cypress.Commands.add('selectChallenge', (category, challenge) => {
  cy.get('#treemenu').within(() => {
    cy.get('.tree-branch')
      .contains(category)
      .within(($form) => {
        cy.wrap($form).click();
        cy.wrap($form)
          .closest('.tree-branch')
          .within(() => {
            cy.contains(challenge).click();
          });
      });
  });
});