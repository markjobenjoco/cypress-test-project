import Homepage_PO from '..//..//support/PageObjects/selenium_easy_demo/Homepage';
import Dropdown_PO from '..//..//support/PageObjects/selenium_easy_demo/Dropdown';
///<reference types="cypress"/>
describe('Practice test for dropdown', () => {
  const homepage_PO = new Homepage_PO();
  const dropdown_PO = new Dropdown_PO();

  before('Open fixture file', () => {
    cy.fixture('selenium-easy-demo/dropdown-list.json').then(
      (dropdown_data) => {
        globalThis.dropdown_data = dropdown_data;
      }
    );
  });
  beforeEach('Open homepage.', () => {
    homepage_PO.navigateTo_Homepage();
    homepage_PO.onClick_RemoveHomepagePopUpMessage();
    homepage_PO.ListOfChallenge('Input Forms', 'Select Dropdown List');
  });
  it('Test for Select List Demo', () => {
    dropdown_PO.onSelect_SelectList(dropdown_data.day);
  });
  it('Test for Multi Select List Demo - Show the first selected value', () => {
    const states = dropdown_data.first.states;
    dropdown_PO.onClick_ShowFirst(states);
  });
  it('Test for Multi Select List Demo - Show all the selected value', () => {
    const states = dropdown_data.all.states;
    dropdown_PO.onClick_ShowAll(states);
  });
});
