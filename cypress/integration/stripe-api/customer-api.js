describe('API test for customer request at Stripe.com', () => {
  let customerId
  const customerUrl = `${Cypress.env('stripe_baseUrl')}${Cypress.env(
    'stripe_basePath'
  )}${Cypress.env('stripe_customerEndpoint')}`
  before('Customer data', () => {
    cy.fixture('/stripe-api/customer.json').then((customerJsonData) => {
      globalThis.customerData = customerJsonData
    })
  })

  context('Test for customer', () => {
    it('Create new customer', () => {
      cy.request({
        method: 'POST',
        url: customerUrl,
        qs: {
          email: customerData.email,
          name: customerData.name,
          phone: customerData.phone,
          address: {
            city: customerData.address.city,
            country: customerData.address.country,
          },
        },
        headers: {
          ContentType: 'application/json',
        },
        auth: {
          username: Cypress.env('auth_username'),
        },
      }).then((response) => {
        customerId = response.body.id
        const responseBody = JSON.parse(JSON.stringify(response.body))
        console.log(responseBody)
      })
    })
    it('Retrieve specific customer', () => {
      cy.log(`${customerUrl}/${customerId}`)
      cy.request({
        method: 'GET',
        url: `${customerUrl}/${customerId}`,
        auth: {
          username: Cypress.env('auth_username'),
        },
      }).then((response) => {
        const responseBody = JSON.parse(JSON.stringify(response.body))
        console.log(responseBody)
        expect(responseBody.email).to.eq(customerData.email)
        expect(responseBody.name).to.eq(customerData.name)
        expect(responseBody.phone).to.eq(customerData.phone)
      })
    })
    it('Update specific customer', () => {
      cy.request({
        method: 'POST',
        url: `${customerUrl}/${customerId}`,
        qs: {
          description: 'Updated customer',
          balance: customerData.balance,
        },
        auth: { username: Cypress.env('auth_username') },
      }).then((response) => {
        const responseBody = JSON.parse(JSON.stringify(response.body))
        console.log(response)

        expect(response.status).eq(200)
        expect(responseBody.id).eq(customerId)
        expect(responseBody.description).includes('Updated')
        expect(responseBody.balance).eq(customerData.balance)
      })
    })
    it('Delete specific customer', () => {
      cy.request({
        method: 'DELETE',
        url: `${customerUrl}/${customerId}`,
        auth: {
          username: Cypress.env('auth_username'),
        },
      })
        .its('status')
        .should('eq', 200)
    })
  })
})
