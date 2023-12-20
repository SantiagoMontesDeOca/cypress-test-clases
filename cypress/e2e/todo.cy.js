/* "Describe" es un una función que se utiliza para agrupar y organizar los casos de prueba.*/

describe('Ejercicios Cypress TODO', () => {
  beforeEach(() => {
    cy.visit('https://todomvc.com/examples/react/#/');
    //Aquí hay espacio para la magia de refactorización.
  });

  /* "it" es una función para definir un caso de prueba individual".*/

  it('1.Crear tarea', () => {

      // Ingresa el nombre de una tarea en el campo de texto. 
      // Presiona la tecla "Enter" o haz clic en el botón "Add".

      cy.get('.new-todo').type('Tarea 1: Tengo un plan{enter}');

      // Verifica que la tarea se agregue correctamente a la lista.

      cy.get('.view > label').contains('Tarea 1: Tengo un plan');
         
    })


  it('2. Marcar tarea como completada', () => {

      // Ingresa el nombre de una tarea en el campo de texto. 
      // Presiona la tecla "Enter" o haz clic en el botón "Add".

      cy.get('.new-todo').type('Tarea 1: Tengo un plan{enter}');

      // Haz clic en el botón de marca de verificación junto a la tarea.

      cy.get('.toggle').click();

      // Verifica que la tarea se marque como completada.

      cy.get('.clear-completed');
      
    })
  

    it('3. Desmarcar tarea completada', () => {

      // Ingresa el nombre de una tarea en el campo de texto. 
      // Presiona la tecla "Enter" o haz clic en el botón "Add".

      cy.get('.new-todo').type('Tarea 2: Ejecutando el PLAN{enter}')

      // Haz clic en el botón de marca de verificación junto a la tarea.

      cy.get('.toggle').click()

      //Haz clic nuevamente en el botón de marca de verificación para desmarcar la tarea.

      cy.get('.toggle').click()

      // Verifica que la tarea se muestre como no completada.

      cy.get('.toggle').should('not.checked')

     
    })

    it('4. Editar tarea', () => {

      // Agrega una tarea a la lista.

      cy.get('.new-todo').type('Tarea 3: May the force be with me{enter}');

      // Haz doble clic en el texto de la tarea para editarlo.

      cy.get('.view > label').dblclick().focused().clear();

      //Ingresa un nuevo nombre para la tarea y presiona la tecla "Enter".
      
      cy.get('.edit').type('MAY THE FORCE BE WITH YOU{enter}');

      // Verifica que el nombre de la tarea se actualice correctamente en la lista.

      cy.get('.view > label').contains('MAY THE FORCE BE WITH YOU');

           
    })

    it('5. Borrar tarea', () => {

      // Agrega una tarea a la lista.

      cy.get('.new-todo').type('Tarea 4: Borrar esta tarea{enter}');

      // Haz clic en el botón "X" junto a la tarea para eliminarla.
      // Al parecer tiene un estilo:hover, por lo que debo hacer aparecer la "x" para eliminarla
      cy.get('.view > label').siblings('.destroy').invoke('show').click();

      // Verifica que la tarea se elimine correctamente de la lista.
      cy.get('.view > label').should('not.exist');

   
    })
  
    it('6. Filtrar tareas', () => {

      // Agrega varias tareas a la lista, algunas completadas y otras no completadas.
    
      cy.get('.new-todo').type('{enter}').type('Llamar a Fer.{enter}');
      cy.get('.new-todo').type('{enter}').type('Hacer la Tarea.{enter}');
      cy.get('.new-todo').type('{enter}').type('Escribir un discurso motivacional las medias.{enter}');
      cy.get('.new-todo').type('{enter}').type('Hacerle una entrevista a las zapatillas.{enter}');
      cy.get('.new-todo').type('{enter}').type('Escribir la carta de agradecimiento.{enter}');
      
      //Tareas completadas..
      cy.get(":nth-child(2) > .view > .toggle").click();
      cy.get(":nth-child(3) > .view > .toggle").click();
      cy.get(":nth-child(5) > .view > .toggle").click();
      
      //Chequeo de check como completadas. 
      cy.get(":nth-child(2) > .view > .toggle").should('be.checked');
      cy.get(":nth-child(3) > .view > .toggle").should('be.checked');
      cy.get(":nth-child(5) > .view > .toggle").should('be.checked');
     
      // Haz clic en el botón de filtro correspondiente a las tareas completadas. 
      cy.get('[data-reactid=".0.2.1.4"] > a').click();
            
      // Verifica que solo se muestren las tareas completadas en la lista.
      cy.get('.todo-list .completed').should('have.length', 3);
      cy.get('.todo-list li').contains('Hacer la Tarea.');
      cy.get('.todo-list li').contains('Escribir un discurso motivacional las medias.');
      cy.get('.todo-list li').contains('Escribir la carta de agradecimiento.');
      
      //Haz clic en el botón de filtro correspondiente a las tareas no completadas.
      cy.get('[data-reactid=".0.2.1.2"] > a').click();
      
      //Verifica que solo se muestren las tareas no completadas en la lista.
      cy.get('.todo-list li').should('have.length', 2);
      cy.get('.todo-list li').contains('Llamar a Fer.');
      cy.get('.todo-list li').contains('Hacerle una entrevista a las zapatillas.');

      //Haz clic en el botón "All" para volver a mostrar todas las tareas en la lista.
      cy.get('[data-reactid=".0.2.1.0"] > a').click();
      cy.get('.todo-list li').should('have.length', 5);
      cy.get('.todo-list li').contains('Llamar a Fer.');
      cy.get('.todo-list li').contains('Hacer la Tarea.');
      cy.get('.todo-list li').contains('Escribir un discurso motivacional las medias.');
      cy.get('.todo-list li').contains('Hacerle una entrevista a las zapatillas.');
      cy.get('.todo-list li').contains('Escribir la carta de agradecimiento.');

    });

});