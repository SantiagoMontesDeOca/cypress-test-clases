/// <reference types="cypress" />

export class LoginPage {

     // Hacer Login.
    enterUserName(text) {

       cy.get('#username').type(text); 

    };
    
    enterPassword(text) {
        cy.get('#password').type(text);
    
    };
    
    clickLogin() {
        cy.get('.fa').click();
    };

};

