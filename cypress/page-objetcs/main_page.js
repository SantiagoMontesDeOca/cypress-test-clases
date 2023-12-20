/// <reference types="cypress" />

export class MainPage {
   
    // Ingresar en la página de FormAuthentication.
    visitMainPage() {
        cy.visit('https://the-internet.herokuapp.com/')
    
    };

    clickFormAuthentication() {
        cy.get(':nth-child(21) > a').click()

    };

};