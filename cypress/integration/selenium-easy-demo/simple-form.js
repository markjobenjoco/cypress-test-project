import Homepage_PO from '..//..//support//PageObjects//selenium_easy_demo//Homepage';
import SimpleFormDemo_PO from '..//..//support//PageObjects//selenium_easy_demo//SimpleFormDemo';
/// <reference types="cypress"/>
describe('Practice test for simple form demo.', () => {
  const homepage_PO = new Homepage_PO();
  const simpleformdemo_PO = new SimpleFormDemo_PO();

  before('Open fixture.', () => {
    cy.fixture('selenium-easy-demo/simple-form.json').then(
      (simple_form_data) => {
        globalThis.simple_form_data = simple_form_data;
      }
    );
  });

  beforeEach('Open homepage.', () => {
    homepage_PO.navigateTo_Homepage();
    homepage_PO.onClick_RemoveHomepagePopUpMessage();
    homepage_PO.ListOfChallenge('Input Forms', 'Simple Form Demo');
  });

  it('Test for Single Input Field', () => {
    const message = simple_form_data.message;
    simpleformdemo_PO.onCreate_SingleInputField(message);
  });
  it('Tet for Two Input Fields', () => {
    const valueA = simple_form_data.firstValue;
    const valueB = simple_form_data.secondValue;
    const expectedResult = simple_form_data.expectedResult;
    simpleformdemo_PO.onCreate_TwoInputFields(valueA, valueB, expectedResult);
  });
});
