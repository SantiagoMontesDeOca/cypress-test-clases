/// <reference types="cypress"/>

export class Example1_Menu_Element_List {

    // Comprobar que la lista que aparece en example1_Menu_Element tiene 5 elementos.
    five_elements_list(expectedLength) {
        
        cy.get('.example ul li').should('have.length', expectedLength);

    };


};