/// <reference types="cypress" />

context('Yelp Search Form', () => {
  it('accepts zip code input', () => {
    const zip = '02215'
    cy.visit('/')

    cy.get('#zip')
      .type(zip)
      .should('have.value', zip)
  })

  it('accepts term input', () => {
    const term = 'Starbucks'
    cy.visit('/')

    cy.get('#term')
      .type(term)
      .should('have.value', term)
  })

  it('accepts category input', () => {
    const category = 'Restaurants'
    cy.visit('/')

    cy.get('#category')
      .type(category)
      .should('have.value', category)
  })

  it('accepts price input', () => {
    const price = '$$'
    cy.visit('/')
    
    cy.get('#price').click()
    cy.contains(price).click()
      .should('have.text', price)
  })
  
})
