/// <reference types="cypress" />

export class LoginPage {

     // Hacer Login.
    EnterUserName() {

       cy.get('#Username').type('text'); 

    };
    
    EnterPassword() {
        cy.get('#password').type('text');
    
    };
    
    ClickLogin() {
        cy.get('.fa').click();
    };

};

