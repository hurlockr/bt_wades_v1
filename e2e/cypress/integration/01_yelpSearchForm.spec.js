/// <reference types="cypress" />

context('Yelp Search Form', () => {
  it('Redirects user to places page', () => {
    cy.visit('/')

    cy.get('.button1').click()

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/places')
    })
  })
  
})