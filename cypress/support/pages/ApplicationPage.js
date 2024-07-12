export class ApplicationPage {
    
    navigate() {
        cy.visit('/')
        cy.acceptCookies()
        
    }

    searchProduct (product) {
        cy.get('#twotabsearchtextbox').type(product+'{enter}')
    }
    
}

export const applicationPage = new ApplicationPage();
