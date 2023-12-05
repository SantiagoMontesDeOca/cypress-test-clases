describe('Pruebas heroku app', () => {
  it('1 login con usuario y contraseña validos', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains (" You logged into a secure area!")

  })
  it('2 login con usuario invalido y contraseña valida', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("T!!!++")
    cy.get('#password').type("SuperSecretPassword!")
    cy.get('.fa').click()
    cy.get('#flash').contains ("Your username is invalid!")
  })

  it('3 login con usuario valido y contraseña inválida', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("tomsmith")
    cy.get('#password').type("+e")
    cy.get('.fa').click()
    cy.get('#flash').contains ("Your password is invalid!")
  })

  it('4 login con usuario invalido y contraseña inválida', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
    cy.get('#username').type("TomSmith!!")
    cy.get('#password').type("+e")
    cy.get('.fa').click()
    cy.get('#flash').contains ("Your username is invalid!")
  })

})