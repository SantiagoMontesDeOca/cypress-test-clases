/// <reference types="cypress" />

export class LoginPage {
    EnterUserName() {
        cy.type('text');
        cy.get('#Username') .type ('text')
    };
    
    EnterPassword() {
        
    };
    
    ClickLogin() {
        
    };

};

