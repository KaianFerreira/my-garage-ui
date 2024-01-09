// https://on.cypress.io/api

describe('integration test', () => {
  it('DOM Was loaded succesfully', () => {
    cy.visit('/')
    cy.contains('div', 'Brands')
    cy.contains('div', 'Cars')
    cy.contains('div', 'Create a new Brand')
    cy.contains('div', 'Create a new Car')
    cy.contains('div', 'ford')
  })
})
