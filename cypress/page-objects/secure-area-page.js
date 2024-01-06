/// <reference types="cypress" />

export class SecureAreaPage {
// Verificar que se inició sesión de manera exitosa.

        checkMessage(text) {

         cy.get('#flash').contains(text);
    
        };

        
};

