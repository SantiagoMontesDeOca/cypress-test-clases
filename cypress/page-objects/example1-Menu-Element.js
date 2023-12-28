/// <reference types="cypress" />

export class Example1_Menu_Element {

    // Hacer click en example1_Menu_Element.
    click_example1_Menu_Element() {

        cy.get('[href="/shifting_content/menu"]').click();

        // Devuelve la instancia actual para permitir el encadenamiento
        return this;
        
    };

    // Comprobar que la lista que aparece en example1_Menu_Element tiene 5 elementos.
    five_elements_list() {
        cy.get('.example ul li').should('have.length', 5);

    };


};

