import Homepage_PO from '..//..//support//PageObjects//selenium_easy_demo//Homepage';
import SimpleFormDemo_PO from '..//..//support//PageObjects//selenium_easy_demo//SimpleFormDemo';
/// <reference types="cypress"/>
describe('Practice testing simple form demo.', () => {
  const homepage_PO = new Homepage_PO();
  const simpleformdemo_PO = new SimpleFormDemo_PO();
  var message;
  var valueA;
  var valueB;
  var expectedResult;

  before('Open fixture.', () => {
    cy.fixture('selenium-easy-demo/simple-form.json')
      .then((simple_form_data) => {
        globalThis.simple_form_data = simple_form_data;
      })
      .then(() => {
        message = simple_form_data.message;
        valueA = simple_form_data.firstValue;
        valueB = simple_form_data.secondValue;
        expectedResult = simple_form_data.expectedResult;
      });
  });

  beforeEach('Open homepage.', () => {
    homepage_PO.navigateTo_Homepage();
    homepage_PO.onClick_RemoveHomepagePopUpMessage();
  });

  it('Test for Single Input Field', () => {
    homepage_PO.ListOfChallenge('Input Forms', 'Simple Form Demo');

    simpleformdemo_PO.onCreate_SingleInputField(message);
  });
  it('Tet for Two Input Fields', () => {
    homepage_PO.ListOfChallenge('Input Forms', 'Simple Form Demo');

    simpleformdemo_PO.onCreate_TwoInputFields(valueA, valueB, expectedResult);
  });
});
