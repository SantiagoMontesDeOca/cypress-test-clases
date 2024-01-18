import { MainPage } from "../page-objects/main-page.js";
import { Example1_Menu_Element } from "../page-objects/example1-Menu-Element.js";
import {Example1_Menu_Element_List} from "../page-objects/example1-Menu-Element-List.js"
 
describe("pruebas-shiftingContent", () => {

    const mainPage = new MainPage();
    const example1_Menu_Element = new Example1_Menu_Element();
    const example1_Menu_Element_List = new Example1_Menu_Element_List();


    beforeEach(() => {

        mainPage.visitMainPage();
        mainPage.clickShiftingContent();
        
    });

    it('Comprobar que la lista que aparece en example1_Menu_Element tiene 5 elementos.', () => {

        example1_Menu_Element.click_example1_Menu_Element()
        
        example1_Menu_Element_List.five_elements_list(5);
        
            
    });
            
})