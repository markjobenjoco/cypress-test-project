describe('Practice test for window modal', () => {
  beforeEach('Open test page', () => {
    cy.openPage('/window-popup-modal-demo.html')
  })
  it('Test for Single Window Popup, twitter', () => {
    goToTwitterPage('Follow On Twitter', 'username field', 'password field')
  })
  it('Test for Single Window Popup, facebook', () => {
    goToFacebookPage('Like us On Facebook', 'testusername', 'testpassword')
  })

  it.only('Test for Multiple Window Modal, Follow twitter and facebook', () => {
    doFollowTwitterAndFacebook(
      'testusername',
      'testpassword',
      'testusername',
      'testpassword'
    )
  })

  function goToTwitterPage(btnName, username, password) {
    let twitter

    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })

    cy.goToForm('Single Window Popup')
      .within(() => {
        cy.contains('a', btnName, { matchCase: false }).as('btn')
        cy.get('@btn')
          .invoke('attr', 'href')
          .then((href) => {
            twitter = href
          })
        cy.get('@btn').click()
      })
      .then(() => {
        cy.get('@windowOpen').should('be.calledWith', twitter)
        cy.window().then((win) => {
          const options = { timeout: 10000, log: false }
          win.location.href = twitter
          cy.get('[class="css-1dbjc4n r-1wtj0ep"]', options).within(() => {
            cy.get('[name="session[username_or_email]"]').type(
              username,
              options
            )
            cy.get('[name="session[password]"]').type(password, options)
          })
        })
      })
  }
  function goToFacebookPage(btnName, username, password) {
    let facebook

    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })

    cy.goToForm('Single Window Popup')
      .within(() => {
        cy.contains('a', btnName, { matchCase: false }).as('btn')
        cy.get('@btn')
          .invoke('attr', 'href')
          .then((href) => {
            facebook = href
          })
        cy.get('@btn').click()
      })
      .then(() => {
        cy.get('@windowOpen').should('be.calledWith', facebook)
        cy.window().then((win) => {
          const options = { timeout: 10000, log: false }
          win.location.href = facebook
          cy.get('#email').type(username, options)
          cy.get('#pass').type(password, options)
          cy.get('#loginbutton').click()
          cy.get('#header_block', options).should('be.visible')
        })
      })
  }
  function doFollowTwitterAndFacebook(
    t_username,
    t_password,
    f_username,
    f_password
  ) {
    const fb = 'https://facebook.com/seleniumeasy'
    const twitter = 'https://twitter.com/intent/follow?screen_name=seleniumeasy'
    const options = { timeout: 10000, log: false }

    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
    cy.goToForm('Multiple Window Modal').within(() => {
      cy.contains('a', 'Follow Twitter & Facebook').click()
    })
    cy.get('@windowOpen').should('be.calledWith', twitter)
    cy.get('@windowOpen').should('be.calledWith', fb)

    cy.window()
      .then((win) => {
        win.location.href = twitter
        cy.get('[class="css-1dbjc4n r-1wtj0ep"]', options).within(() => {
          cy.get('[name="session[username_or_email]"]').type(
            t_username,
            options
          )
          cy.get('[name="session[password]"]').type(t_password, options)
        })
      })
      .then(() => {
        cy.window().then((win) => {
          win.location.href = fb
          cy.get('#email').type(f_username, options)
          cy.get('#pass').type(f_password, options)
          cy.get('#loginbutton').click()
          cy.get('#header_block', options).should('be.visible')
        })
      })
  }
})
