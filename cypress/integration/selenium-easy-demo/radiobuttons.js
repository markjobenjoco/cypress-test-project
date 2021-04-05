import Homepage_PO from '..//..//support/PageObjects/selenium_easy_demo/Homepage';
import RadionButtons_PO from '..//..//support/PageObjects/selenium_easy_demo/Radiobuttons';
/// <reference types="cypress"/>
describe('Practice test for radionbuttons demo', () => {
  const homepage_PO = new Homepage_PO();
  const radiobuttos_PO = new RadionButtons_PO();

  before('Open fixture file', () => {
    cy.fixture('selenium-easy-demo/radiobuttons.json').then(
      (radio_button_data) => {
        globalThis.radio_button_data = radio_button_data;
      }
    );
  });

  beforeEach('Open homepage.', () => {
    homepage_PO.navigateTo_Homepage();
    homepage_PO.onClick_RemoveHomepagePopUpMessage();
    homepage_PO.onSelect_ListOfChallenge('Input Forms', 'Radio Buttons Demo');
  });

  it('Test for Radio Button Demo', () => {
    const panel_name = 'Radio Button Demo';
    const option = radio_button_data.singleRadioButton.gender;
    radiobuttos_PO.onCheck_Radionbuttons(panel_name, option);
  });
  it('Test for Group Radio Buttons Demo', () => {
    const panel_name = 'Group Radio Buttons Demo';
    const option1 = radio_button_data.groupRadioButton.gender;
    const option2 = radio_button_data.groupRadioButton.age;
    radiobuttos_PO.onCheck_GroupRadioButtons(panel_name, option1, option2);
  });
});
