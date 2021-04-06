import CheckboxDemo_PO from '..//..//support/PageObjects/selenium_easy_demo/Checkbox';
/// <reference types="cypress"/>
describe('Practice test for checkbox demo.', () => {
  const checkbox_PO = new CheckboxDemo_PO();

  before('Open fixture.', () => {
    cy.fixture('selenium-easy-demo/checkbox.json').then((checkbox_data) => {
      globalThis.checkbox_data = checkbox_data;
    });
  });

  beforeEach('Open homepage.', () => {
    cy.openHomepage();
    cy.selectChallenge('Input Forms', 'Checkbox Demo');
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
