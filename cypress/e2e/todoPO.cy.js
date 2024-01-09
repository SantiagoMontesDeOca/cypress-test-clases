/// <reference types="cypress" />

import { TodoReactPage } from "../page-objects/todomvc-react-page.js";

describe("Pruebas-todo-react", () => {
    const todoReactPage = new TodoReactPage();

    beforeEach(() => {
        todoReactPage.visitTodoReactExample();
    
    });

    it('1. Crear tarea', () => {

        // Ingresa el nombre de una tarea en el campo de texto y presiona enter.
        todoReactPage.newTodo("Tarea 1: Tengo un plan");
        
        // Verifica que la tarea se agregue correctamente a la lista.
        todoReactPage.verifyTaskPresent('Tarea 1: Tengo un plan')
           
    });

    it('2. Marcar tarea como completada', () => {

        // Ingresa el nombre de una tarea en el campo de texto y presiona enter.
        todoReactPage.newTodo("Tarea 1: Tengo un plan");

        // Haz clic en el botón de marca de verificación junto a la tarea.
        todoReactPage.clickToggleByNthChild(1);

        // Verifica que la tarea se marque como completada.
        todoReactPage.checkCompletedTask();
    
    });

    it('3. Desmarcar tarea completada', () => {

        // Ingresa el nombre de una tarea en el campo de texto y presiona enter.
        todoReactPage.newTodo("Tarea 2: Ejecutando el PLAN");

        // Haz clic en el botón de marca de verificación junto a la tarea.
        todoReactPage.clickToggleByNthChild(1);

        // Haz clic nuevamente en el botón de marca de verificación para desmarcar la tarea.
        todoReactPage.clickToggleByNthChild(1);

        // Verifica que la tarea se muestre como no completada.
        todoReactPage.verifyTaskNotCompleted();
       
    });

    it('4. Editar tarea', () => {

        // Agrega una tarea a la lista.
        todoReactPage.newTodo("Tarea 3: May the force be with me");
          
        // Haz doble clic en el texto de la tarea para editarlo.
        todoReactPage.doubleClickLabelAndClear();
  
        // Ingresa un nuevo nombre para la tarea y presiona la tecla "Enter".
        todoReactPage.enterNewTaskNameAndPressEnter('MAY THE FORCE BE WITH YOU');

        // Verifica que el nombre de la tarea se actualice correctamente en la lista.
        todoReactPage.verifyTaskLabelContains('MAY THE FORCE BE WITH YOU');
               
    });

    it('5. Borrar la tarea', () => {

        // Agrega una tarea a la lista.
        todoReactPage.newTodo("Tarea 4: Borrar esta tarea");
    
        // Haz clic en el botón "X" junto a la tarea para eliminarla.
        // Al tener un estilo:hover, por lo que debo hacer aparecer la "x" para eliminarla
        todoReactPage.showAndClickDestroyButton();
        
        // Verifica que la tarea se elimine correctamente de la lista.
        todoReactPage.verifyElementNotExists();
  
     
    });

    it('6. Filtrar tareas', () => {
        
        // Agrega varias tareas a la lista, algunas completadas y otras no completadas.
        todoReactPage.newTodo("Llamar a Fer.");
        todoReactPage.newTodo("Hacer la Tarea.");
        todoReactPage.newTodo("Escribir un discurso motivacional las medias.");
        todoReactPage.newTodo("Hacerle una entrevista a las zapatillas.");
        todoReactPage.newTodo("Escribir la carta de agradecimiento.");

        // Click para marcar como tareas completadas.
        todoReactPage.clickToggleByNthChild(2);
        todoReactPage.clickToggleByNthChild(3);
        todoReactPage.clickToggleByNthChild(5);

        // Chequeo de check como completadas. 
        todoReactPage.checkCheckboxByPosition(2);
        todoReactPage.checkCheckboxByPosition(3);
        todoReactPage.checkCheckboxByPosition(5);

        // Haz clic en el botón de filtro correspondiente a las tareas completadas. 
        todoReactPage.clickFilterCompletedTasks();
              
        // Verifica que solo se muestren las tareas completadas en la lista.
        todoReactPage.verifyCompletedTasksCount(3);
        todoReactPage.verifyTaskPresent('Hacer la Tarea');
        todoReactPage.verifyTaskPresent('Hacer la Tarea.');
        todoReactPage.verifyTaskPresent('Escribir un discurso motivacional las medias.');
        todoReactPage.verifyTaskPresent('Escribir la carta de agradecimiento.');    


        // Haz clic en el botón de filtro correspondiente a las tareas no completadas.
        todoReactPage.clickFilterIncompletedTasks();
        
        //Verifica que solo se muestren las tareas no completadas en la lista.
        todoReactPage.verifyIncompleteTasksCount(2);
        todoReactPage.verifyTaskPresent('Llamar a Fer.');
        todoReactPage.verifyTaskPresent('Hacerle una entrevista a las zapatillas.');

        // Haz clic en el botón "All" para volver a mostrar todas las tareas en la lista.
        todoReactPage.clickFilterAllTasks();

        // Verifies that there are exactly 5 incomplete tasks and checks the presence of specific tasks in the list.
        todoReactPage.verifyIncompleteTasksCount(5);
        todoReactPage.verifyTaskPresent('Llamar a Fer.');
        todoReactPage.verifyTaskPresent('Hacer la Tarea.');
        todoReactPage.verifyTaskPresent('Escribir un discurso motivacional las medias.');
        todoReactPage.verifyTaskPresent('Hacerle una entrevista a las zapatillas.');
        todoReactPage.verifyTaskPresent('Escribir la carta de agradecimiento.');

        
    });

});