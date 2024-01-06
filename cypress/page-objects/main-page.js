/// <reference types="cypress" />

export class MainPage {
   
    // Ingresar en la página de FormAuthentication.
    visitMainPage() {
        cy.visit('https://the-internet.herokuapp.com/')
    
    };

    clickFormAuthentication() {
        cy.get(':nth-child(22) > a').click()

    };

    clickShiftingContent()  {
        cy.get(':nth-child(39) > a').click()
    
    };



};