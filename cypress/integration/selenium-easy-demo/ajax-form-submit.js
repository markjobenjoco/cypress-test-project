import AjaxForm_PO from '..//..//support/PageObjects/selenium_easy_demo/AjaxForm'
///<reference types="cypress"/>
describe('Practice test in Ajax Form Submit', () => {
  const ajaxForm_PO = new AjaxForm_PO()

  before('Open fixture', () => {
    cy.fixture('selenium-easy-demo/ajax-form.json').then((formData) => {
      globalThis.formData = formData
    })
  })

  beforeEach('Navigate to test env', () => {
    cy.openHomepage()
    cy.selectChallenge('Input Forms', 'Ajax Form Submit')
  })
  it('Test for AJAX form', () => {
    ajaxForm_PO.onEnter_Name(formData.title)
    ajaxForm_PO.onEnter_Comment(formData.description)
    ajaxForm_PO.onClick_Submit()
  })
})
