/// <reference types="cypress"/>
class Homepage_PO {
  navigateTo_Homepage() {
    cy.visit('/');
  }

  onClick_RemoveHomepagePopUpMessage() {
    cy.get('#at-cv-lightbox-win').within(($form) => {
      cy.wrap($form).find('#at-cv-lightbox-close').click({ force: true });
    });
  }

  ListOfChallenge(menu_category, challenge) {
    cy.get('#treemenu').within(() => {
      cy.get('.tree-branch').contains(menu_category).click();
      cy.contains(challenge).click();
    });
    cy.url().should('contain', 'basic-first-form-demo');
  }
}
export default Homepage_PO;
