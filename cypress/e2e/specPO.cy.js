/// <reference types="cypress" />

import { MainPage } from "../page-objects/main_page.js";
import { LoginPage } from "../page-objects/login_page.js";
import { SecureAreaPage } from "../page-objects/secure_area_page.js";

    describe('pruebas-login', () => {

        const mainPage = new MainPage();
        const loginPage = new LoginPage();
        const secureAreaPage = new SecureAreaPage();

        it('1 login con usuario y contraseña válidos', () => {
            mainPage();
            loginPage.enterUserName('tomsmith');
            loginPage.enterPassword("SuperSecretPassword!");
            loginPage.clickLogin();
            secureAreaPage.verifyLoginMessage("You logged into a secure area!");
        });






    });     
    