import { MainPage } from "../page-objects/main-page.js";

 
describe("pruebas-contextMenu", () => {

    const mainPage = new MainPage();
    

    beforeEach(() => {

        mainPage.visitMainPage();
        mainPage.clickContextMenu();
               
    });

    it('Context Menu click and alert', () => {
        // Simular un clic derecho en un elemento que generará una alerta
          cy.get('#hot-spot').rightclick();
    
          // Que aparezca la alerta y confirmarla
          cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('You selected a context menu');
          });
    });
});