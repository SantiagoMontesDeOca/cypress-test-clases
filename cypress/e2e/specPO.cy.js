/// <reference types="cypress" />

import { MainPage } from "../page-objects/main-page.js";
import { LoginPage } from "../page-objects/login-page.js";
import { SecureAreaPage } from "../page-objects/secure-area-page.js";
 
    describe("pruebas-login", () => {

        const mainPage = new MainPage();
        const loginPage = new LoginPage();
        const secureAreaPage = new SecureAreaPage();

        beforeEach(() => {

            mainPage.visitMainPage();
            mainPage.clickFormAuthentication();
            
        });

            it('The user is logged in correctly', () => {
                
                loginPage.enterUserName("tomsmith");
                loginPage.enterPassword("SuperSecretPassword!");
                loginPage.clickLogin();
                secureAreaPage.checkMessage("You logged into a secure area!");
            });

            it('2 login with invalid user and valid password', () => {
                loginPage.enterUserName("T!!!++");
                loginPage.enterPassword("SuperSecretPassword!");
                loginPage.clickLogin();
                secureAreaPage.checkMessage("Your username is invalid!");
            });

            it('3 login with valid user and invalid password', () => {
                cy.get('#username').type("tomsmith");
                loginPage.enterPassword("+e");
                loginPage.clickLogin();
                secureAreaPage.checkMessage("Your password is invalid!");
            });
            
            it('4 with invalid user and password', () => {
                loginPage.enterUserName("TomSmith!!");
                loginPage.enterPassword("+e");
                loginPage.clickLogin();
                secureAreaPage.checkMessage("Your username is invalid!");
            });
        
    });     
    