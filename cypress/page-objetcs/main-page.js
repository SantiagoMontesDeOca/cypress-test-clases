/// <reference types="cypress" />

export class MainPage {
    visitMainPage() {
        cy.visit('https://the-internet.herokuapp.com/')
    
    };

    clickFormAuthentication() {
        cy.get(':nth-child(21) > a').click()

    };

};