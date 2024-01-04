/// <reference types="cypress" />

export class TodoReactPage {
    // Ingresar en la página de todoMVC en la seccion React
    
        visitTodoReactExample() {
            cy.get('.js-app-list-inner > :nth-child(9) > a')

            // cy.visit('https://todomvc.com/')
        
        };

        
                
    }