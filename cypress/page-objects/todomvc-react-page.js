/// <reference types="cypress" />

export class TodoReactPage {
    
    // Ingresar en la página de todoMVC en la sección React.    
    visitTodoReactExample() {
      cy.visit('https://todomvc.com/examples/react/#/');
      // El siguiente código es para realizar el paso anterior 
      // y hacer clic en el botón de React, pero hay una falla, 
      // por lo que debería chequear "Uncaught exceptions" de la página web. 
      // cy.get('.js-app-list-inner > :nth-child(9)').click();
    };
  
    // Ingresa el nombre de una tarea en el campo de texto y presiona "Enter".     
    newTodo(text) {
      cy.get('.new-todo').type(text + '{enter}');

    };

    // Double-click on the task label, focus on it, and clear the content.
    doubleClickLabelAndClear() {
      cy.get('.view > label').dblclick().focused().clear();
    };
  
    // Haz clic en el botón de marca de verificación junto a la tarea.
    clickCheckBox() {
      cy.get('input.toggle').click();
      
    };
      
    // Verifica que la tarea se marque como completada.
    checkCompletedTask() {
      cy.get('.clear-completed');
    
    };

    // Verify there are exactly N completed tasks.
    verifyCompletedTasksCount(count) {
      cy.get('.todo-list .completed').should('have.length', count);
    
    };

    // Verify a specific task is present in the list.
    verifyTaskPresent(task) {
      cy.get('.todo-list li').contains(task);
    
    };


    // Verify that the task is displayed as not completed.
    verifyTaskNotCompleted() {
     cy.get('input.toggle').should('not.checked');
    
    };

    // Verify there are exactly N INcompleted tasks
    verifyIncompleteTasksCount(count) {
      cy.get('.todo-list li').should('have.length', count);
    
    };

   



    
                  
  };
  