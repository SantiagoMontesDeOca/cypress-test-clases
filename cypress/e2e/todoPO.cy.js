/// <reference types="cypress" />

import { TodoReactPage} from "../page-objects/todomvc-react-page.js";


    describe("Pruebas-todo-react", () => {

        const todoReactPage = new TodoReactPage();

        beforeEach(() => {

            todoReactPage.visitTodoReactExample();
           
        });

            it('1.Crear tarea', () => {

                // Ingresa el nombre de una tarea en el campo de texto. 
                // Presiona la tecla "Enter" o haz clic en el botón "Add".
  
                cy.get('.new-todo').type('Tarea 1: Tengo un plan{enter}');
  
                // Verifica que la tarea se agregue correctamente a la lista.
  
           
            });


})
