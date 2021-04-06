import SelectDropdown_PO from '..//..//support/PageObjects/selenium_easy_demo/SelectDropdown';
///<reference types="cypress"/>
describe('Practice test for JQuery Select dropdown', () => {
  const selectDropdown_PO = new SelectDropdown_PO();

  before('Open fixture file', () => {
    cy.fixture('selenium-easy-demo/select-dropdown.json').then(
      (selectDropdown) => {
        globalThis.selectDropdown = selectDropdown;
      }
    );
  });

  beforeEach('Navigate to JQuery Select dropdown', () => {
    cy.openHomepage();
    cy.selectChallenge('Input Forms', 'JQuery Select dropdown');
  });
  it('Test for dropdown with search box', () => {
    selectDropdown_PO.onSelect_Country(
      selectDropdown.inputSearchbox,
      selectDropdown.country
    );
  });
  it('Test for select Multiple Values', () => {
    selectDropdown_PO.onSelect_States(selectDropdown.states);
  });
  it('Test for dropdown with disabled values', () => {
    selectDropdown_PO.onSelect_Teritory(selectDropdown.territory);
  });
  it('Test for dropdown with category related options', () => {
    selectDropdown_PO.onSelect_File(selectDropdown.file);
  });
});
