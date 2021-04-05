/// <reference types="cypress"/>
class Homepage_PO {
  navigateTo_Homepage() {
    cy.visit('/');
  }

  onClick_RemoveHomepagePopUpMessage() {
    cy.get('#at-cv-lightbox-win', { timeout: 10000 }).within(($form) => {
      cy.wrap($form).find('#at-cv-lightbox-close').click({ force: true });
    });
  }

  onSelect_ListOfChallenge(menu_category, challenge) {
    cy.get('#treemenu').within(() => {
      cy.get('.tree-branch')
        .contains(menu_category)
        .within(($form) => {
          cy.wrap($form).click();
          cy.wrap($form)
            .closest('.tree-branch')
            .within(() => {
              cy.contains(challenge).click();
            });
        });
    });
  }
}
export default Homepage_PO;
