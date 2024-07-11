

import {defineStep} from "cypress-cucumber-preprocessor/steps"
import { applicationPage } from "../../../support/pages/ApplicationPage";
import { productPage } from "../../../support/pages/ProductPage";

defineStep("Amazon Application page should open", () =>{
    applicationPage.navigate()
})

defineStep(`Customer confirming the terms and conditions`, () => {
   cy.get('[class="custom-control custom-radio"]').find('input').click({force: true})
   cy.get('[class="dhb-primary-button"]').click()
});

defineStep(`Customer should continue the application`, () => {
    cy.url().should('contain', 'https://netbanking.dhbbank.local/Application/SaveOnline/Select.aspx')
});

defineStep(`Customer try to continue without doing necessary action`, () => {
    cy.get('[class="dhb-primary-button"]').click()
});

defineStep(`Customer should see the error message like:`, (table) => {
    table.hashes().forEach(element => {
        cy.get('[class="alert fade show alert-danger"]').contains(element.ErrorMessage)
    });
    
});

defineStep(`Customer wants to search {word}`, (product) => {
    applicationPage.searchProduct(product)
    
})

defineStep(`Customer should see the results for {word}`, (product) => {
    productPage.checkAllProductHeaders(product)
})