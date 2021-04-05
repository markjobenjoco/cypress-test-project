import Homepage_PO from '..//..//support/PageObjects/selenium_easy_demo/Homepage';
import InputForm_PO from '..//..//support/PageObjects/selenium_easy_demo/InputForm';

/// <reference types="cypress"/>
describe('Test for Input Form Submit', () => {
  const homepage_PO = new Homepage_PO();
  const inputform_PO = new InputForm_PO();

  before('Open fixture file', () => {
    cy.fixture('selenium-easy-demo/contact-us.json').then((user_details) => {
      globalThis.user_details = user_details;
    });
  });
  beforeEach('Open homepage.', () => {
    homepage_PO.navigateTo_Homepage();
    homepage_PO.onClick_RemoveHomepagePopUpMessage();
    homepage_PO.onSelect_ListOfChallenge('Input Forms', 'Input Form Submit');
  });
  it('Test for Contact Us', { defaultCommandTimeout: 10000 }, () => {
    inputform_PO.onEnter_ContactUsDetails(
      user_details.first_name,
      user_details.last_name,
      user_details.email,
      user_details.phone,
      user_details.address,
      user_details.city,
      user_details.state,
      user_details.zip,
      user_details.website,
      user_details.isHosting,
      user_details.comment
    );
  });
});
