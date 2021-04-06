///<reference types="cypress"/>
class SelectDropdown_PO {
  onSelect_Country(searchCountry, selectedCountry) {
    cy.get('[class="panel-title"]')
      .contains('Drop Down with Search box')
      .closest('.panel-primary')
      .within(() => {
        cy.get('[role="combobox"]').as('countryDropdown').click();
      });
    cy.get('[class="select2-dropdown select2-dropdown--below"]').within(() => {
      cy.get('[type="search"]').type(searchCountry);
      cy.get('.select2-results__option').contains(selectedCountry).click();
    });
    cy.get('@countryDropdown').should('contain', selectedCountry);
  }
  onSelect_States(states) {
    cy.get('[class="panel panel-primary"]')
      .contains(' Select Multiple Values')
      .closest('[class="panel panel-primary"]')
      .within(() => {
        cy.get('[class="select2-selection__rendered"]').as('stateDropdown');
      });
    states.forEach((state) => {
      cy.get('@stateDropdown').click();
      cy.get('[class="select2-results__options"] > li').contains(state).click();
    });
    states.forEach((state) => {
      cy.get('@stateDropdown').should('contain', state);
    });
  }
  onSelect_Teritory(teritory) {
    cy.get('[class="panel panel-primary"]')
      .contains('Drop Down with Disabled values')
      .closest('[class="panel panel-primary"]')
      .within(() => {
        cy.get('[role="combobox"]').as('territory').click();
      });
    cy.get('[class="select2-results__options"] > li')
      .contains(teritory)
      .as('teritory')
      .invoke('attr', 'aria-selected')
      .should('eq', 'false');
    cy.get('@teritory').click();
    cy.get('@territory').should('contain', teritory);
  }
  onSelect_File(fileName) {
    cy.get('[class="panel panel-primary"]')
      .contains('Drop-down with Category related options')
      .closest('[class="panel panel-primary"]')
      .within(() => {
        cy.get('[id="files"]').select(fileName).should('contain', fileName);
      });
  }
}
export default SelectDropdown_PO;
