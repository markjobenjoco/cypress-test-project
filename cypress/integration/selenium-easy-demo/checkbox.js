import Homepage_PO from '..//..//support/PageObjects/selenium_easy_demo/Homepage';
import CheckboxDemo_PO from '..//..//support/PageObjects/selenium_easy_demo/CheckboxDemo';
/// <reference types="cypress"/>
describe('Practice test for checkbox demo.', () => {
  const homepage_PO = new Homepage_PO();
  const checkbox_PO = new CheckboxDemo_PO();

  before('Open fixture.', () => {
    cy.fixture('selenium-easy-demo/checkbox.json').then((checkbox_data) => {
      globalThis.checkbox_data = checkbox_data;
    });
  });

  beforeEach('Open homepage.', () => {
    homepage_PO.navigateTo_Homepage();
    homepage_PO.onClick_RemoveHomepagePopUpMessage();
    homepage_PO.ListOfChallenge('Input Forms', 'Checkbox Demo');
  });

  it('Test for Single Checkbox Demo', () => {
    checkbox_PO.onCheck_SingleCheckboxDemo('Single Checkbox Demo');
  });
  it('Test for Multiple Checkbox Demo', () => {
    checkbox_PO.onCheck_MultipleCheckboxDemo(
      'Multiple Checkbox Demo',
      checkbox_data.checkbox
    );
  });
});
