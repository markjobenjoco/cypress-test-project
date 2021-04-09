import InputForm_PO from '..//..//support/PageObjects/selenium_easy_demo/InputForm'

/// <reference types="cypress"/>
describe('Test for Input Form Submit', () => {
  const inputform_PO = new InputForm_PO()

  before('Open fixture file', () => {
    cy.fixture('selenium-easy-demo/contact-us.json').then((user_details) => {
      globalThis.user_details = user_details
    })
  })
  beforeEach('Open homepage.', () => {
    cy.openHomepage()
    cy.selectChallenge('Input Forms', 'Input Form Submit')
  })
  it('Test for Contact Us', { defaultCommandTimeout: 10000 }, () => {
    inputform_PO.onEnter_FirstName(user_details.first_name)
    inputform_PO.onEnter_LastName(user_details.last_name)
    inputform_PO.onEnter_Email(user_details.email)
    inputform_PO.onEnter_PhoneNumber(user_details.phone)
    inputform_PO.onEnter_Address(user_details.address)
    inputform_PO.onEnter_City(user_details.city)
    inputform_PO.onEnter_State(user_details.state)
    inputform_PO.onEnter_ZipCode(user_details.zip)
    inputform_PO.onEnter_Website(user_details.website)
    inputform_PO.onSelect_Hosting(user_details.isHosting)
    inputform_PO.onEnter_Comment(user_details.comment)
    inputform_PO.onClick_Send()
  })
  it('Test for contact us input field using commands', () => {
    cy.enterTextToField('first_name', user_details.first_name)
    cy.enterTextToField('last_name', user_details.last_name)
    cy.enterTextToField('email', user_details.email)
    cy.enterTextToField('phone', user_details.phone)
    cy.enterTextToField('address', user_details.address)
    cy.enterTextToField('city', user_details.city)
    inputform_PO.onEnter_State(user_details.state)
    cy.enterTextToField('zip', user_details.zip)
    cy.enterTextToField('website', user_details.website)
    inputform_PO.onSelect_Hosting(user_details.isHosting)
    cy.enterTextToField('comment', user_details.comment)
    inputform_PO.onClick_Send()
  })
})
